import type { ComponentType, ReactNode } from "react";
import type * as React from "react";
import type * as Primitives from "@deepseek-ai/dsh-client-ui-primitives";
import type {SourceSelectProps} from "./client-types.js";

// 0.1.7 起按字重导出图标；0.1.6 及更早把尺寸写进导出名。
export const CHEVRON_DOWN_ICONS = ["IconChevronDownOutlineRegular", "IconChevronDownOutline14"] as const;
export const LIST_PEN_ICONS = ["IconListPenOutlineRegular", "IconListPenOutline16"] as const;

type HostIconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean | "true";
};
type HostIcon = ComponentType<HostIconProps>;

function MissingHostIcon(): ReactNode {
  return null;
}

/** 返回名单中第一枚宿主实际导出的图标；都没有时返回空组件，避免设置页整页抛错。 */
export function hostIcon(primitives: object | null | undefined, names: readonly string[]): HostIcon {
  const bag = primitives && typeof primitives === "object" ? primitives as Record<string, unknown> : {};
  for (const name of names) {
    const icon = bag[name];
    if (typeof icon === "function") return icon as HostIcon;
  }
  return MissingHostIcon;
}

// 统一使用宿主菜单，颜色、键盘导航、弹层定位与选中标记交给官方组件。
export function createSourceSelect(react: typeof React, primitives: typeof Primitives) {
  const h = react.createElement;
  const ChevronDown = hostIcon(primitives, CHEVRON_DOWN_ICONS);
  return function SourceSelect(props: SourceSelectProps) {
    const [open, setOpen] = react.useState(false);
    const anchorRef = react.useRef<HTMLElement>(null);
    react.useEffect(() => {
      if (!open) return;
      // 宿主设置窗口也监听Escape，菜单必须先消费它，避免父窗口一起关闭。
      const escape = (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;
        event.preventDefault(); event.stopImmediatePropagation();
        setOpen(false);
        const anchor = anchorRef.current;
        if (anchor instanceof HTMLButtonElement) anchor.focus();
        else anchor?.querySelector("button")?.focus();
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
      anchor: props.action ? h("span", { ref: anchorRef, className: "dssm-action-menu" }, h(primitives.Button, {
        variant: "ghost", size: "sm", disabled: props.disabled,
        "aria-label": props.label, "aria-haspopup": "menu", "aria-expanded": open,
        onClick: () => setOpen(!open),
        onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setOpen(true); } },
      }, props.label)) : h("button", {
        ref: anchorRef, type: "button", className: "dssm-control dssm-select-trigger", disabled: props.disabled,
        "aria-label": props.label, "aria-haspopup": "menu", "aria-expanded": open,
        onClick: () => setOpen(!open),
        onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setOpen(true); } },
      }, h("span", { className: "dssm-select-value" }, selected?.label || props.label), h(ChevronDown, { className: "dssm-select-chevron", ...{"aria-hidden": true} })),
    });
  };
}
