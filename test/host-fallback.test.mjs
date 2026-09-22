// 设置页控件改为 Ant Design，不再按宿主版本分叉自绘开关、标签和页签。
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../lib/client.js", import.meta.url), "utf8");
assert.equal(source.includes("@deepseek-ai/dsh-client-ui-primitives"), false);
assert.equal(source.includes("dssm-fallback-tabs"), false);
assert.equal(source.includes("dssm-fallback-switch"), false);
assert.equal(source.includes("dssm-host-modal{"), false);
assert.ok(source.includes("data-ds-dark-theme"));
assert.ok(source.includes("block: true"));
console.log("设置页不再保留宿主控件兜底");
