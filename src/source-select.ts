import type * as React from "react";
import type { SourceSelectProps } from "./client-types.js";
import { Button, Dropdown, Select } from "./antd-ui.js";

/** 筛选用 Ant Design Select，操作菜单用 Dropdown。宽度跟选项走，不铺满整行。 */
export function createSourceSelect(react: typeof React) {
  const h = react.createElement;
  return function SourceSelect(props: SourceSelectProps) {
    if (props.action) {
      return h(Dropdown, {
        trigger: ["click"],
        menu: {
          items: props.options.map((option) => ({ key: option.value, label: option.label, disabled: option.disabled, danger: option.danger })),
          onClick: (info: { key: string }) => props.onChange(String(info.key)),
        },
      }, h(Button, { disabled: props.disabled, "aria-label": props.label }, props.label));
    }
    return h(Select, {
      className: "dssm-antd-select",
      "aria-label": props.label,
      disabled: props.disabled,
      value: props.value ?? "",
      popupMatchSelectWidth: false,
      options: props.options.map((option) => ({ value: option.value, label: option.label, disabled: option.disabled })),
      onChange: (value: unknown) => props.onChange(String(value)),
    });
  };
}
