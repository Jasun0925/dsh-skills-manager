// 统一使用宿主菜单，颜色、键盘导航、弹层定位与选中标记交给官方组件。
export function createSourceSelect(react, primitives) {
  const h = react.createElement;
  return function SourceSelect(props) {
    const [open, setOpen] = react.useState(false);
    const anchorRef = react.useRef(null);
    react.useEffect(() => {
      if (!open) return;
      // 宿主设置窗口也监听Escape，菜单必须先消费它，避免父窗口一起关闭。
      const escape = event => {
        if (event.key !== "Escape") return;
        event.preventDefault(); event.stopImmediatePropagation();
        setOpen(false); anchorRef.current?.focus();
      };
      window.addEventListener("keydown", escape, true);
      return () => window.removeEventListener("keydown", escape, true);
    }, [open]);
    const selected = props.options.find(option => option.value === props.value);
    return h(primitives.Menu, {
      open, portal: true, dense: true, autoFocus: true, align: props.action ? "end" : "start", className: props.action ? "dssm-action-menu" : "dssm-select-menu",
      selectedId: props.action ? undefined : props.value,
      items: props.options.map(option => ({ id: option.value, label: option.label, disabled: option.disabled, danger: option.danger })),
      onClose: () => setOpen(false),
      onSelect: value => { props.onChange(value); setOpen(false); },
      anchor: h("button", {
        ref: anchorRef, type: "button", className: props.action ? "dssm-btn dssm-btn-quiet" : "dssm-control dssm-select-trigger", disabled: props.disabled,
        "aria-label": props.label, "aria-haspopup": "menu", "aria-expanded": open,
        onClick: () => setOpen(!open),
        onKeyDown: event => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setOpen(true); } },
      }, h("span", { className: "dssm-select-value" }, props.action ? props.label : selected?.label || props.label), props.action ? null : h(primitives.IconChevronDownOutline14, { className: "dssm-select-chevron", "aria-hidden": true })),
    });
  };
}
