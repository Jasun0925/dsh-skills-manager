// 仓库页复用宿主技能面板组件；只在进入页签时读取本地目录缓存。
export const repositoryLocales = {
  zh: {
    "repo.local": "本机", "repo.source": "安装来源", "repo.check": "检查更新", "repo.update": "可更新", "repo.review": "查看更新", "repo.rollback": "恢复上一版", "repo.confirmUpdate": "备份并更新", "repo.confirmRollback": "备份并恢复", "repo.overwrite": "备份本地修改并替换", "repo.modified": "检测到本地修改。替换会覆盖当前文件，原文件将完整备份，可恢复。", "repo.noChanges": "文件内容没有变化。", "repo.added": "新增", "repo.removed": "删除", "repo.modifiedFile": "修改", "repo.updating": "更新中…", "repo.updateProgress": "正在校验、备份并替换，请稍候…", "repo.updateSuccess": "更新完成，已保留上一版备份。", "repo.rollbackSuccess": "已恢复上一版。", "repo.checked": "检查完成，可更新项已标记。", "repo.manageUpdate": "管理更新", "error.repo.modified": "存在本地修改，请预览并确认备份后替换。",
    "scope.repositories": "技能仓库", "repo.add": "添加仓库", "repo.manage": "管理仓库", "repo.refresh": "刷新并检查更新", "repo.save": "添加并扫描",
    "repo.hint": "从公开 GitHub 仓库发现技能，按需安装到全局 DSH。", "repo.footer": "刷新会检查仓库与技能更新，不会自动替换本地文件。历史备份不会自动清理，占用空间会随更新增加。",
    "repo.search": "搜索仓库技能", "repo.all": "全部仓库", "repo.states": "全部状态", "repo.available": "可安装", "repo.installed": "已安装", "repo.conflict": "同名冲突", "repo.invalid": "格式无效", "repo.install": "安装", "repo.detail": "详情",
    "repo.installing": "安装中…", "repo.installProgress": "正在读取并校验技能文件，请稍候…", "repo.installSuccess": "安装成功，可在全局技能中查看。",
    "repo.empty": "还没有技能仓库，添加一个公开 GitHub 仓库开始。", "repo.noSkills": "没有匹配的技能。可刷新仓库或调整筛选。",
    "repo.url": "仓库地址", "repo.ref": "分支或标签（可选）", "repo.directory": "技能子目录（可选）", "repo.defaultBranch": "留空使用默认分支", "repo.directoryHint": "例如 skills，留空扫描整个仓库",
    "repo.remove": "移除仓库", "repo.removeHint": "仅移除仓库订阅，已安装的技能会保留。", "repo.removeConfirm": "确认移除", "repo.cancel": "取消", "repo.close": "关闭", "repo.loading": "处理中…", "repo.success": "操作完成", "repo.installHint": "技能可能包含脚本，请先查看说明并确认信任来源。安装会保留资源文件，不会执行脚本。", "repo.commit": "扫描版本", "repo.notScanned": "尚未扫描", "repo.updated": "上次刷新",
    "error.repo.tooLarge": "仓库归档超过 32 MiB，请选择较小的技能仓库；子目录筛选不会缩小下载量。", "error.repo.installState": "技能文件已保留，但来源状态未确认。请恢复磁盘写入后重新打开仓库页，系统会校验文件并恢复记录。",
    "error.repo.invalid": "仓库地址、路径或内容无效，请检查输入及仓库大小。", "error.repo.network": "仓库访问失败，请检查网络或稍后重试。上次列表已保留。", "error.repo.state": "仓库状态文件损坏或无法读取，请保留文件并修复后重试。", "error.repo.conflict": "同名技能已存在或安装失败，本地文件未被覆盖。",
  },
  en: {
    "repo.local": "Local", "repo.source": "Installed from", "repo.check": "Check updates", "repo.update": "Update available", "repo.review": "Review update", "repo.rollback": "Restore previous version", "repo.confirmUpdate": "Back up and update", "repo.confirmRollback": "Back up and restore", "repo.overwrite": "Back up local edits and replace", "repo.modified": "Local edits detected. Replacement overwrites current files and keeps a complete backup for restoration.", "repo.noChanges": "No file changes.", "repo.added": "Added", "repo.removed": "Removed", "repo.modifiedFile": "Modified", "repo.updating": "Updating…", "repo.updateProgress": "Verifying, backing up and replacing files. Please wait…", "repo.updateSuccess": "Updated. Previous version backed up.", "repo.rollbackSuccess": "Previous version restored.", "repo.checked": "Check complete. Available updates are marked.", "repo.manageUpdate": "Manage updates", "error.repo.modified": "Local edits detected. Review and confirm replacement with a backup.",
    "scope.repositories": "Repositories", "repo.add": "Add repository", "repo.manage": "Manage repositories", "repo.refresh": "Refresh & check updates", "repo.save": "Add and scan",
    "repo.hint": "Discover skills in public GitHub repositories and install them to global DSH.", "repo.footer": "Refresh checks repositories and skill updates without replacing local files. Historical backups are not cleaned automatically and use additional disk space.",
    "repo.search": "Search repository skills", "repo.all": "All repositories", "repo.states": "All statuses", "repo.available": "Available", "repo.installed": "Installed", "repo.conflict": "Name conflict", "repo.invalid": "Invalid format", "repo.install": "Install", "repo.detail": "Details",
    "repo.installing": "Installing…", "repo.installProgress": "Reading and verifying skill files. Please wait…", "repo.installSuccess": "Installed. Available in global skills.",
    "repo.empty": "No repositories yet. Add a public GitHub repository to get started.", "repo.noSkills": "No matching skills. Refresh the repository or adjust your filters.",
    "repo.url": "Repository URL", "repo.ref": "Branch or tag (optional)", "repo.directory": "Skill subdirectory (optional)", "repo.defaultBranch": "Leave empty for the default branch", "repo.directoryHint": "For example: skills. Leave empty to scan the repository.",
    "repo.remove": "Remove repository", "repo.removeHint": "This removes the subscription only. Installed skills are kept.", "repo.removeConfirm": "Confirm removal", "repo.cancel": "Cancel", "repo.close": "Close", "repo.loading": "Working…", "repo.success": "Completed", "repo.installHint": "Skills may include scripts. Read the instructions and trust the source before installing. Resources are copied; scripts are not executed.", "repo.commit": "Snapshot version", "repo.notScanned": "Not scanned yet", "repo.updated": "Last refreshed",
    "error.repo.tooLarge": "Repository archive exceeds 32 MiB. Choose a smaller repository; a subdirectory filter does not reduce the download size.", "error.repo.installState": "Skill files were preserved but source tracking could not be saved. Restore disk write access and reopen Repositories to verify files and recover the record.",
    "error.repo.invalid": "Invalid repository URL, path or contents. Check the input and repository size.", "error.repo.network": "Repository request failed. Check your connection or retry later. The previous catalog was kept.", "error.repo.state": "Repository state is corrupt or unreadable. Preserve the file and repair it before retrying.", "error.repo.conflict": "A skill with this name exists or installation failed. Local files were not overwritten.",
  },
};

const CSS = `.dssm-repo-panel{display:flex;flex-direction:column;gap:12px;min-width:0}.dssm-repo-row{display:flex;align-items:center;gap:8px;padding:11px 13px;border-top:1px solid var(--dsw-alias-border-l1,#3a3a3a)}.dssm-repo-row:first-child{border-top:0}.dssm-repo-main{flex:1;min-width:0}.dssm-repo-description{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-tertiary,#a0a0a0);font-size:12px}.dssm-repo-filters{display:flex;gap:9px}.dssm-repo-filters>*{flex:1;min-width:0}.dssm-repo-panel .dssm-desc{margin:0}.dssm-repo-metadata{font-size:11px;color:var(--dsw-alias-label-tertiary,#a0a0a0);overflow-wrap:anywhere}.dssm-repo-panel .dssm-source{flex-shrink:0}.dssm-tabs{gap:20px;overflow-x:auto}@container(max-width:400px){.dssm-repo-row{flex-wrap:wrap}.dssm-repo-main{flex-basis:100%}.dssm-tabs{gap:12px}}`;

/** 返回动作区与内容区，使现有标题、页签顺序保持不变。 */
export function createRepositoryUI({ react, Modal, Input, SourceSelect, api, headers, translateError }) {
  const h = react.createElement;
  return function useRepositoryUI({ active, t, onInstalled }) {
    const [repos, setRepos] = react.useState([]);
    const [busy, setBusy] = react.useState(false);
    const [feedback, setFeedback] = react.useState(null);
    const [installation, setInstallation] = react.useState(null);
    const [query, setQuery] = react.useState("");
    const [source, setSource] = react.useState("");
    const [status, setStatus] = react.useState("");
    const [expanded, setExpanded] = react.useState({});
    const [modal, setModal] = react.useState(null);
    const [form, setForm] = react.useState({ url: "", ref: "", subdirectory: "" });
    const locked = react.useRef(false);
    const mounted = react.useRef(true);
    react.useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
    async function load() { const data = await api("/repositories"); if (mounted.current) setRepos(data.repositories || []); }
    function message(error) {
      if (t("format.locale") === "zh-CN" && error.code === "error.repo.invalid") return error.error || error.message || t(error.code);
      return translateError(t, error) || error.message || String(error);
    }
    function feedbackText(value) { return value.payload ? message(value.payload) : (value.key ? t(value.key) : value.text || "") + (value.name ? " · " + value.name : ""); }
    async function perform(task, reload = true) {
      if (locked.current) return;
      locked.current = true; setBusy(true); setFeedback(null);
      try { await task(); if (reload) await load(); }
      catch (error) { if (mounted.current) setFeedback({ error: true, payload: error }); }
      finally { locked.current = false; if (mounted.current) setBusy(false); }
    }
    function post(action, body) { return api("/repositories/" + action, { method: "POST", headers, body: JSON.stringify(body) }); }
    async function refreshRepo(id) { const result = await post("refresh", { id }); if (result.error) setFeedback({ error: true, payload: result.error }); }
    react.useEffect(() => { if (active) perform(load, false); }, [active]);
    function button(key, action, secondary = true, disabled = false) { return h("button", { type: "button", className: "dssm-btn" + (secondary ? " dssm-btn-secondary" : ""), disabled: busy || disabled, onClick: action }, t(key)); }
    function close() { if (!locked.current) setModal(null); }
    function install(repo, skill) {
      return perform(async () => {
        const target = { id: repo.id, path: skill.path };
        setInstallation({ ...target, pending: true, key: "repo.installProgress" });
        try {
          await post("install", target);
        } catch (error) {
          if (mounted.current) setInstallation({ ...target, error: true, payload: error });
          throw error;
        }
        if (!mounted.current) return;
        setInstallation({ ...target, key: "repo.installSuccess" });
        setFeedback({ key: "repo.installSuccess", name: skill.name });
        // 本地列表刷新失败不能把已经完成的安装误报为失败。
        if (onInstalled) await onInstalled();
      });
    }
    function preview(repo, skill, rollback = false) {
      return perform(async () => {
        const detail = await post("preview", { id: repo.id, path: skill.path, rollback });
        setModal({ type: rollback ? "rollback" : "review", repo, skill, detail });
      });
    }
    function update() {
      const selected = modal, rollback = selected.type === "rollback";
      return perform(async () => {
        const target = { id: selected.repo.id, path: selected.skill.path };
        setInstallation({ ...target, pending: true, key: "repo.updateProgress" });
        try {
          await post(rollback ? "rollback" : "update", { ...target, token: selected.detail.token, overwrite: selected.detail.localModified });
        } catch (error) {
          if (mounted.current) setInstallation({ ...target, error: true, payload: error });
          throw error;
        }
        if (!mounted.current) return;
        const key = rollback ? "repo.rollbackSuccess" : "repo.updateSuccess";
        setInstallation({ ...target, key }); setFeedback({ key }); setModal(null);
        if (onInstalled) await onInstalled();
      });
    }
    const actions = h("div", { key: "repository-actions", className: "dssm-actions" },
      button("repo.refresh", () => perform(async () => { for (const repo of repos) await refreshRepo(repo.id); }), true, !repos.length),
      button("repo.add", () => { setFeedback(null); setForm({ url: "", ref: "", subdirectory: "" }); setModal({ type: "add" }); }, false),
      button("repo.manage", () => { setFeedback(null); setModal({ type: "manage" }); }));
    const visibleRepos = repos.filter((r) => !source || r.id === source);
    const groups = visibleRepos.map((repo) => {
      const search = query.trim().toLowerCase();
      const skills = repo.skills.filter((s) => (!status || s.status === status) && (!search || `${s.name} ${s.description} ${repo.owner}/${repo.name}`.toLowerCase().includes(search)));
      const open = expanded[repo.id] === undefined ? !!search || !!status : expanded[repo.id];
      const panelId = "dssm-repo-" + repo.id;
      return h("div", { key: repo.id, className: "dssm-source" },
        h("div", { className: "dssm-source-head" }, h("button", { type: "button", className: "dssm-source-head-main", "aria-expanded": open, "aria-controls": panelId, onClick: () => setExpanded({ ...expanded, [repo.id]: !open }) },
          h("span", { className: "dssm-source-chevron", "aria-hidden": true }, open ? "▾" : "▸"), h("span", { className: "dssm-source-title" }, repo.owner + "/" + repo.name), h("span", { className: "dssm-count" }, skills.length)),
        h("span", { className: "dssm-repo-metadata" }, repo.commit ? repo.commit.slice(0, 7) : t("repo.notScanned"))),
        repo.error ? h("div", { className: "dssm-feedback dssm-error", role: "alert" }, message(repo.error)) : null,
        h("div", { id: panelId, className: "dssm-source-body", hidden: !open }, open ? skills.length ? skills.map((skill) => h("div", { key: skill.path, className: "dssm-repo-row" },
          h("div", { className: "dssm-repo-main" }, h("div", { className: "dssm-name" }, skill.name), h("div", { className: "dssm-repo-description", title: skill.description }, skill.description),
            installation?.id === repo.id && installation.path === skill.path ? h("div", { className: "dssm-note" + (installation.error ? " dssm-error" : ""), role: installation.error ? "alert" : "status", "aria-live": "polite" }, feedbackText(installation)) : null),
          button("repo.detail", () => perform(async () => { const detail = await post("detail", { id: repo.id, path: skill.path }); setModal({ type: "detail", detail, repo }); })),
          skill.tracked && (skill.updateAvailable || skill.status === "conflict") ? button("repo.review", () => preview(repo, skill)) : null,
          skill.canRollback ? button("repo.rollback", () => preview(repo, skill, true)) : null,
          button(installation?.id === repo.id && installation.path === skill.path && installation.pending ? "repo.installing" : skill.status === "available" ? "repo.install" : "repo." + skill.status, () => install(repo, skill), skill.status !== "available", skill.status !== "available"))) : h("div", { className: "dssm-empty" }, t("repo.noSkills")) : null));
    });
    function select(label, value, change, options) {
      return h(SourceSelect, { label: t(label), value, onChange: change, options: [{ value: "", label: t(label) }, ...options.map(([id, text]) => ({ value: id, label: text }))] });
    }
    const feedbackNode = feedback ? h("div", { className: "dssm-feedback" + (feedback.error ? " dssm-error" : ""), role: "status" }, feedbackText(feedback)) : null;
    let dialog;
    if (modal) {
      let body;
      if (modal.type === "review" || modal.type === "rollback") body = h("div", { className: "dssm-repo-panel" },
        h("div", { className: "dssm-name" }, modal.skill.name),
        h("div", { className: "dssm-repo-metadata" }, modal.repo.owner + "/" + modal.repo.name + " · " + modal.detail.commit.slice(0, 7)),
        modal.detail.localModified ? h("p", { className: "dssm-feedback dssm-warning", role: "alert" }, t("repo.modified")) : null,
        modal.detail.changes.length ? h("ul", { style: { maxHeight: "240px", overflow: "auto", overflowWrap: "anywhere", paddingLeft: "20px" } }, modal.detail.changes.map(change => h("li", { key: change.path }, t("repo." + (change.kind === "modified" ? "modifiedFile" : change.kind)) + " · " + change.path))) : h("p", null, t("repo.noChanges")),
        busy ? h("div", { role: "status" }, t("repo.updateProgress")) : null, feedbackNode,
        h("div", { className: "dssm-modal-actions" }, button("repo.cancel", close), button(modal.detail.localModified ? "repo.overwrite" : modal.type === "rollback" ? "repo.confirmRollback" : "repo.confirmUpdate", update, false, !modal.detail.changes.length)));
      if (modal.type === "add") body = h("form", { className: "dssm-form", onSubmit: (e) => { e.preventDefault(); if (!form.url.trim()) return; perform(async () => { const repo = await post("add", form); await refreshRepo(repo.id); setModal(null); }); } },
        [["url", "repo.url", "https://github.com/owner/repo"], ["ref", "repo.ref", t("repo.defaultBranch")], ["subdirectory", "repo.directory", t("repo.directoryHint")]].map(([key, label, placeholder]) => h("label", { className: "dssm-field", key }, h("span", { className: "dssm-label" }, t(label)), h(Input, { className: "dssm-input", "aria-label": t(label), value: form[key], placeholder, maxLength: key === "url" ? 2048 : 512, required: key === "url", disabled: busy, onChange: (e) => setForm({ ...form, [key]: e.target.value }) }))),
        feedbackNode, h("div", { className: "dssm-modal-actions" }, button("repo.cancel", close), button("repo.save", () => { if (form.url.trim()) perform(async () => { const repo = await post("add", form); await refreshRepo(repo.id); setModal(null); }); }, false, !form.url.trim())));
      if (modal.type === "manage") body = h("div", { className: "dssm-repo-panel" }, h("p", { className: "dssm-desc" }, t("repo.removeHint")), feedbackNode, repos.length ? repos.map((repo) => h("div", { key: repo.id, className: "dssm-repo-row" },
        h("div", { className: "dssm-repo-main" }, h("div", { className: "dssm-name" }, repo.owner + "/" + repo.name), h("div", { className: "dssm-note" }, [repo.ref || t("repo.defaultBranch"), repo.subdirectory].filter(Boolean).join(" · ")), h("div", { className: "dssm-repo-metadata" }, repo.refreshedAt ? t("repo.updated") + " · " + new Date(repo.refreshedAt).toLocaleString(t("format.locale")) : t("repo.notScanned"))),
        button("repo.refresh", () => perform(() => refreshRepo(repo.id))), button("repo.remove", () => setModal({ type: "remove", repo })) )) : h("div", { className: "dssm-empty" }, t("repo.empty")));
      if (modal.type === "remove") body = h("div", null, h("p", { className: "dssm-desc" }, modal.repo.owner + "/" + modal.repo.name), h("p", { className: "dssm-desc" }, t("repo.removeHint")), feedbackNode,
        h("div", { className: "dssm-modal-actions" }, button("repo.cancel", () => setModal({ type: "manage" })), button("repo.removeConfirm", () => perform(async () => { await post("remove", { id: modal.repo.id }); if (source === modal.repo.id) setSource(""); setModal({ type: "manage" }); }), false)));
      if (modal.type === "detail") body = h("div", { className: "dssm-repo-panel" }, h("div", { className: "dssm-name" }, modal.detail.name), h("p", { className: "dssm-desc" }, modal.detail.description), h("div", { className: "dssm-detail-path" }, modal.repo.owner + "/" + modal.repo.name + " · " + modal.detail.path), h("div", { className: "dssm-repo-metadata" }, t("repo.commit") + " · " + modal.detail.commit), h("p", { className: "dssm-note" }, t("repo.installHint")), h("pre", { className: "dssm-code" }, modal.detail.body), feedbackNode);
      dialog = h(Modal, { title: t("repo." + (modal.type === "remove" ? "remove" : modal.type)), closeLabel: t("repo.close"), onClose: close }, body);
    }
    const content = h("div", { key: "repositories", id: "dssm-scope-panel", role: "tabpanel", "aria-labelledby": "dssm-tab-repositories", className: "dssm-repo-panel", "aria-busy": busy }, h("style", null, CSS),
      h("p", { className: "dssm-desc" }, t("repo.hint")), h(Input, { className: "dssm-input", "aria-label": t("repo.search"), placeholder: t("repo.search"), value: query, onChange: (e) => { setQuery(e.target.value); setExpanded({}); } }),
      h("div", { className: "dssm-repo-filters" }, select("repo.all", source, setSource, repos.map((r) => [r.id, r.owner + "/" + r.name])), select("repo.states", status, (value) => { setStatus(value); setExpanded({}); }, ["available", "installed", "update", "conflict", "invalid"].map((s) => [s, t("repo." + s)]))),
      !modal ? feedbackNode : null, busy ? h("div", { className: "dssm-note", role: "status" }, t("repo.loading")) : null,
      repos.length ? groups : h("div", { className: "dssm-empty" }, t("repo.empty")), h("p", { className: "dssm-note" }, t("repo.footer")), dialog);
    return { actions, content, focusSource: (origin, name) => { setSource(origin.id); setQuery(name); setStatus(""); setExpanded({ [origin.id]: true }); } };
  };
}
