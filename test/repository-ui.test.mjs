// 验证真实事件的筛选、折叠、添加和安装行为。
import assert from "node:assert/strict";
import { createRepositoryUI } from "../src/repository-ui.js";
let values = [], cursor = 0, effects = [], dependencies = [];
const react = {
  createElement(type, props, ...children) { return { type, props: props || {}, children: children.flat(Infinity).filter((v) => v != null && typeof v !== "boolean") }; },
  useState(initial) { const i = cursor++; if (!(i in values)) values[i] = initial; return [values[i], (v) => { values[i] = typeof v === "function" ? v(values[i]) : v; }]; },
  useRef(initial) { const i = cursor++; return values[i] || (values[i] = { current: initial }); },
  useEffect(fn, deps) { const i = cursor++; if (!dependencies[i] || deps.some((v, n) => dependencies[i][n] !== v)) { effects.push(fn); dependencies[i] = deps; } },
};
let repos = [{ id: "one", owner: "example", name: "skills", skills: [{ path: "skills/pdf", name: "pdf", description: "PDF 文档", status: "available" }, { path: "skills/docx", name: "docx", description: "Word 文档", status: "conflict" }] }];
const calls = [];
let finishInstall;
let failInstall = false;
const api = async (path, options) => {
  const body = options?.body ? JSON.parse(options.body) : undefined;
  calls.push({ path, body });
  if (path.endsWith("/install")) {
    await new Promise((resolve) => { finishInstall = resolve; });
    if (failInstall) throw new Error("下载超时，请重试");
    repos[0].skills[0].status = "installed";
  }
  if (path.endsWith("/add")) return { id: "two" };
  if (path.endsWith("/refresh")) return { error: null };
  if (path.endsWith("/preview")) return { token: "checked", commit: "a".repeat(40), localModified: true, changes: [{ kind: "modified", path: "SKILL.md" }] };
  if (path.endsWith("/update")) repos[0].skills[0].status = "installed";
  return { repositories: repos };
};
const Input = Symbol("官方输入框");
const useUI = createRepositoryUI({ react, Modal: "modal", Input, api, headers: {}, translateError: (_t, e) => e.error || e.message });
let languagePrefix = "";
const t = (key) => languagePrefix + key;
let ui;
function render() { cursor = 0; ui = useUI({ active: true, t }); }
function nodes(node) { return !node || typeof node !== "object" ? [] : [node, ...node.children.flatMap(nodes)]; }
const all = () => [...nodes(ui.actions), ...nodes(ui.content)];
const find = (predicate) => all().find(predicate);
const click = async (key) => { find((n) => n.type === "button" && n.children.includes(key)).props.onClick(); await new Promise(setImmediate); render(); };
render(); effects.splice(0).forEach((f) => f()); await new Promise(setImmediate); render();
assert.equal(calls.filter(call => call.path === "/repositories").length, 1, "进入仓库只读取一次列表");
assert.equal(find(n => n.type === "button" && n.children.includes("repo.check")), undefined, "不再提供重复的检查更新按钮");
assert.equal(find((n) => n.props["aria-label"] === "repo.search").type, Input, "仓库搜索必须使用官方输入框");
assert.equal(find((n) => n.props.className === "dssm-repo-row"), undefined, "默认折叠");
find((n) => n.props["aria-expanded"] === false).props.onClick(); render();
assert.equal(all().filter((n) => n.props.className === "dssm-repo-row").length, 2);
assert.ok(find((n) => n.type === "button" && n.children.includes("repo.conflict")).props.disabled);
find((n) => n.props["aria-label"] === "repo.search").props.onChange({ target: { value: "PDF" } }); render();
assert.equal(all().filter((n) => n.props.className === "dssm-repo-row").length, 1);
await click("repo.install");
assert.ok(find((n) => n.type === "button" && n.children.includes("repo.installing"))?.props.disabled, "当前行应立即显示安装中并禁用");
assert.ok(find((n) => n.props.className === "dssm-repo-main")?.children.some((n) => n.props?.role === "status"), "安装进度应显示在当前行");
finishInstall(); await new Promise(setImmediate); render();
assert.deepEqual(calls.find((c) => c.path.endsWith("/install")).body, { id: "one", path: "skills/pdf" });
assert.ok(find((n) => n.type === "button" && n.children.includes("repo.installed")).props.disabled);
assert.ok(find((n) => n.props.className === "dssm-repo-main")?.children.some((n) => n.props?.role === "status" && n.children.join("").includes("repo.installSuccess")), "成功结果应留在当前行");
languagePrefix = "en:"; render();
assert.ok(find(n => n.props.role === "status" && n.children.includes("en:repo.installSuccess")), "切换语言后已完成提示重新翻译");
languagePrefix = ""; render();
repos[0].skills[0].status = "available"; failInstall = true; render();
await click("repo.install"); finishInstall(); await new Promise(setImmediate); render();
assert.ok(find((n) => n.props.role === "alert" && n.children.includes("下载超时，请重试")), "失败应在当前行明确提示");
assert.equal(find((n) => n.type === "button" && n.children.includes("repo.install")).props.disabled, false, "失败后可以重试");
await click("repo.add");
find((n) => n.props["aria-label"] === "repo.url").props.onChange({ target: { value: "a/b" } }); render();
await click("repo.save");
assert.ok(calls.some((c) => c.path.endsWith("/add") && c.body.url === "a/b"));
assert.ok(calls.some((c) => c.path.endsWith("/refresh") && c.body.id === "two"));
repos[0].skills[0] = { ...repos[0].skills[0], status: "update", tracked: true, updateAvailable: true, canRollback: true };
render();
await click("repo.review");
assert.ok(find(n => n.props.role === "alert" && n.children.includes("repo.modified")), "预览必须提示本地修改");
assert.ok(!calls.some(c => c.path.endsWith("/update")), "打开预览不执行更新");
await click("repo.overwrite");
assert.deepEqual(calls.find(c => c.path.endsWith("/update")).body, { id: "one", path: "skills/pdf", token: "checked", overwrite: true });
assert.ok(find(n => n.props.role === "status" && n.children.includes("repo.updateSuccess")), "更新后显示完成提示");
await click("repo.rollback");
assert.equal(calls.filter(c => c.path.endsWith("/preview")).at(-1).body.rollback, true);
console.log("仓库界面折叠、搜索、冲突保护、安装与添加测试通过");
