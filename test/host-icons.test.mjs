import assert from "node:assert/strict";
import { CHEVRON_DOWN_ICONS, LIST_PEN_ICONS, createSourceSelect, hostIcon } from "../src/source-select.ts";

const Modern = function ModernIcon() {};
const Legacy = function LegacyIcon() {};
const react = {
  createElement: (type, props, ...children) => ({ type, props, children }),
  useState: () => [false, () => {}],
  useRef: () => ({ current: null }),
  useEffect() {},
};

assert.equal(hostIcon({ IconChevronDownOutlineRegular: Modern, IconChevronDownOutline14: Legacy }, CHEVRON_DOWN_ICONS), Modern, "0.1.7 字重图标优先于旧尺寸名");
assert.equal(hostIcon({ IconChevronDownOutline14: Legacy }, CHEVRON_DOWN_ICONS), Legacy, "0.1.6 及更早继续使用尺寸后缀图标");
assert.equal(hostIcon({ IconListPenOutlineRegular: Modern }, LIST_PEN_ICONS), Modern, "反馈图标使用 0.1.7 导出名");
assert.equal(hostIcon({ IconListPenOutline16: Legacy }, LIST_PEN_ICONS), Legacy, "反馈图标回退到 0.1.6 导出名");
assert.equal(hostIcon({}, LIST_PEN_ICONS)({}), null, "两代图标都不存在时不抛错");

const legacySelect = createSourceSelect(react, { Menu() {}, IconChevronDownOutline14: Legacy });
const legacyTree = legacySelect({ label: "来源", value: "a", options: [{ value: "a", label: "本机" }], onChange() {} });
assert.equal(legacyTree.props.anchor.children[1].type, Legacy, "下拉在旧宿主上使用尺寸后缀箭头");

const modernSelect = createSourceSelect(react, { Menu() {}, IconChevronDownOutlineRegular: Modern, IconChevronDownOutline14: Legacy });
const modernTree = modernSelect({ label: "来源", value: "a", options: [{ value: "a", label: "本机" }], onChange() {} });
assert.equal(modernTree.props.anchor.children[1].type, Modern, "下拉在 0.1.7 上使用字重箭头");

console.log("宿主图标兼容检查通过");
