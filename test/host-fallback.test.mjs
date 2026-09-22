// 旧宿主没有 SegmentedTabs / Switch / Tag 时，设置页仍要能画出页签、开关和只读标签。
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../lib/client.js", import.meta.url), "utf8");
let cursor = 0;
let state = [];
const outerState = [];
const innerState = [];
const effects = [];
const react = {
  createElement(type, props, ...children) {
    return { type, props: props || {}, children: children.flat(Infinity).filter((child) => child != null && typeof child !== "boolean") };
  },
  useState(initial) { const index = cursor++, store = state; if (!(index in store)) store[index] = initial; return [store[index], (next) => { store[index] = typeof next === "function" ? next(store[index]) : next; }]; },
  useRef(value) { const index = cursor++; return state[index] || (state[index] = { current: value }); },
  useEffect(effect) { const index = cursor++; if (!(index in state)) { state[index] = true; effects.push(effect); } },
  useLayoutEffect() { cursor++; },
};

function nodes(node) {
  if (!node || typeof node !== "object") return [];
  if (typeof node.type === "function" && node.type.name !== "SourceSelect") return nodes(node.type({ ...node.props, children: node.children }));
  return [node, ...(node.children || []).flatMap(nodes)];
}

function mount(primitives) {
  outerState.length = 0;
  innerState.length = 0;
  effects.length = 0;
  let definition;
  let component;
  new Function("window", source)({ __ModuleLoader__: { load(value) { definition = value; } } });
  const client = definition.factory((id) => id === "react" ? react : primitives);
  client.apply({
    effect(fn) { return fn(); },
    locale: { register() { return () => {}; }, bind() { return (key) => key; } },
    slots: { inject(_name, fn) { fn(); }, register(_options, fn) { component = fn; } },
  });
  const render = () => {
    state = outerState;
    cursor = 0;
    const view = component({ t: (key) => key, useSessions: () => undefined });
    state = innerState;
    cursor = 0;
    return view.type(view.props);
  };
  return { render };
}

const base = {
  Button(props) { return { type: "button", props, children: [].concat(props.children || []).flat() }; },
  Input(props) { return { type: "input", props, children: [] }; },
  Menu(props) { return { type: "menu", props, children: [].concat(props.children || []).flat() }; },
  Modal(props) { return { type: "div", props: { role: "dialog" }, children: [].concat(props.children || []).flat() }; },
};
const data = {
  roots: [{ key: "copilot", mutable: false, exists: true, enabled: true, skills: [{ name: "readonly-skill", enabled: true, loadable: true }] }],
  projects: [],
  trash: [],
  warnings: [],
};
const originalFetch = globalThis.fetch;
globalThis.fetch = async () => ({ ok: true, json: async () => ({ data }) });
try {
  for (const [name, primitives] of [
    ["0.1.2", base],
    ["0.1.6", { ...base, Switch(props) { return { type: "button", props: { ...props, role: "switch" }, children: [] }; }, Tag(props) { return { type: "span", props, children: [].concat(props.children || []).flat() }; } }],
  ]) {
    const { render } = mount(primitives);
    render();
    effects.splice(0).forEach((effect) => effect());
    await new Promise((resolve) => setImmediate(resolve));
    let tree = render();
    const header = nodes(tree).find((node) => node.props["aria-expanded"] === false);
    if (header) { header.props.onClick(); tree = render(); }
    const rendered = nodes(tree);
    const tablist = rendered.find((node) => node.props.role === "tablist");
    assert.ok(tablist, `${name} 设置页要有页签`);
    assert.equal(tablist.props.style?.gridTemplateColumns, "repeat(4, minmax(0, 1fr))", `${name} 页签要排成一行`);
    assert.match(String(tablist.props.className), /dssm-scope-tabs/, `${name} 页签要保留范围 class`);
    assert.ok(rendered.some((node) => node.props.role === "switch" || node.type === primitives.Switch), `${name} 设置页要有开关`);
    assert.ok(rendered.some((node) => node.props.className === "dssm-fallback-tag" || node.props.tone === "outline"), `${name} 设置页要有只读标签`);
  }
} finally {
  globalThis.fetch = originalFetch;
}
console.log("旧宿主缺少分段页签、开关和标签时设置页仍可渲染");
