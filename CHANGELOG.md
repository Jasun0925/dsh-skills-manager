# Changelog

[简体中文](CHANGELOG.zh-CN.md)

## Unreleased

## 1.1.1 - 2026-09-23

- Add repository accepts a public Bitbucket address as well as GitHub. `https://bitbucket.org/owner/repo` and a `/src/branch/path` link both work. An empty branch uses HEAD, then main, then master. The archive is downloaded directly and is not executed.

## 1.1.0 - 2026-09-23

- Add support for DeepSeek Harness `0.1.7-alpha.1` while retaining the seven previously supported versions.
- Replace settings controls with Ant Design. Buttons, inputs, selects, tabs, switches, tags, and dialogs follow its default blue theme and the host light or dark scheme. The settings client is minified, and it uses the host’s single copy of React and React DOM. The unused host primitives peer is dropped.
- Use Ant Design’s default-size round buttons for page actions. The GitHub, feedback, and update actions stay small and rectangular, and keep their icons. The update dialog is an Ant Design modal at its default position: the status sits on the latest-version row, and the manual command wraps instead of scrolling sideways. Escape closes only that dialog.
- Keep the source and status menus at the width of their labels, and place search on the same row at the right. Escape closes an open filter or action menu and does not close the host settings page.
- Render each skill source as an Ant Design Collapse and the skills inside it as a List. The skill description appears when hovering the name. The skill detail dialog matches the repository detail: the name, a description paragraph, the source path, and one read-only body.
- Place each skill switch at the right edge of its row so it lines up with the source switch. The enabled and disabled labels are omitted beside that switch. Shadowed and invalid skills still show their status.
- Remove unused skill-table, row-grid, and action-menu styles. Dialogs stay at Ant Design’s default position.

## 1.0.1 - 2026-09-21

This maintenance release improves source development, packaging verification and screenshot privacy while retaining the existing plugin runtime interfaces.

### Development and packaging

- Migrate ten source modules to strict TypeScript, retaining the existing plugin architecture and JavaScript runtime entry points. Add domain, host and client contracts, plus positive and negative type tests; include type checking in the main test command.
- Stop tracking `lib` in Git. Run type checks and build automatically before packing, and verify that a clean directory without `lib` produces a package with all runtime files and a loadable server entry point.
- Cover the exact minimum Node.js version 22.19.0 alongside Node.js 24 in CI. Code changes continue to trigger the supported-host compatibility matrix.
- Document supported installation via the npm registry or locally built `.tgz` packages; direct Git/GitHub dependency installation is not supported. Align the English and Chinese development instructions.

### Fixes

- Restore modal focus after an asynchronous form submission disables the focused button, so Escape after an error closes only the plugin dialog instead of the entire host settings page.

### Documentation and privacy

- Crop all nine screenshots to their feature panels, redact local paths, and remove real filenames and project directories from the background. Reduce total screenshot size by 81% with lossless compression.
- Correct the English screenshot caption and align image display sizes with the cropped files.

## 1.0.0 - 2026-09-21

### 1.0 release scope

This release upgrades directly from published 0.1.53 to 1.0.0. The planned 0.1.54 was not released separately; all its changes are included here. The plugin enters the 1.x series, while host support remains limited to the explicitly listed DSH versions.

### New: skill repositories and installation

- Add a Repositories tab alongside Global skills, Project skills and Trash, with public GitHub subscription management.
- Accept owner/repo, HTTPS repository URLs and tree URLs; select a branch, tag or skill subdirectory, or use the default branch.
- Browse collapsible repository groups; search names and descriptions, filter repositories and installation states, and read skill contents, paths and snapshot details.
- Install individual skills into global DSH with their instructions, scripts and resources. Installation does not execute scripts or overwrite same-name skills.
- Show Available, Installed, Name conflict, Invalid format and Update available states, with inline installation progress and success or failure feedback.
- Distinguish local skills from repository installations, link to their GitHub source, and navigate directly to repository update management.
- Removing a subscription preserves installed skills and source tracking.

### New: skill updates and backup rollback

- Combine refresh and update checks into Refresh & check updates. Refresh updates the scan cache and detects changes without replacing local copies.
- Compare content hashes for every skill file, including instructions, scripts and resources; unrelated repository changes do not trigger an update.
- Preview added, modified and deleted files before explicitly confirming backup and replacement.
- Protect local edits by default; overwriting requires Back up local edits and replace. Changes after preview require a new preview.
- Restore the previous version after previewing changes and backing up the current copy, preserving any local edits stored in the backup.
- Use directory replacement and failure rollback, including recovery from tracking-write failures. Historical backups are retained without automatic cleanup.

### Downloads and reliability

- Download ZIP archives directly from codeload.github.com without consuming GitHub REST anonymous quotas. Unspecified branches use HEAD first; only 404 triggers main/master fallback. A 403 or timeout does not trigger blind branch retries.
- Use SHA-256 content snapshots and verified caches for installation and updates. Missing or corrupt caches require refresh instead of silently installing different content.
- Preserve the previous catalog and cache after scan or network failures, remove duplicate catalog reads and hash calculations, and keep downloads outside the local file mutation queue.
- Recover interrupted installation tracking only after verifying the complete installed directory. Modified, missing or extra files and linked directories are not automatically adopted.
- Provide specific archive-size and tracking-write errors; enforce limits on expanded size, entry count, paths and instruction size, and reject unsafe paths, duplicate paths and corrupt archives.
- Cover cross-site and write-request protection and path traversal rejection; serialize repository mutations.

### Interface and interactions

- Align headings, tabs, tab-specific actions, filters and lists; use host Input/Menu components with archive-style input and dropdown presentation.
- Use compact two-line skill rows with source links, invocation state and a More menu; reduce long-list clutter through filtering and collapsible groups.
- Scope import results to their tab so Global import completion no longer appears in Repositories.
- Fix background flicker when opening repository details: show a loading dialog immediately and read details without changing the whole page's busy state or reloading its list.
- Add a spinner, current repository and item counts to both all-repository refresh and single-repository refresh in the management dialog. Stop on completion or failure, allow retries, and respect reduced-motion preferences.
- Complete Chinese and English labels, errors, progress and results; remove unused strings and correct the project empty-state hint to include ordinary workspaces.
- Use host semantic colors with fallbacks for older hosts; retain dropdown keyboard navigation, dismissal and focus restoration.

### Documentation and validation

- Update both READMEs with repository installation, source tracking, update and rollback guidance and limits; provide complete Chinese and English repository guides.
- Refresh bilingual banners with DSH Skills Manager at the top and replace Global/Repositories screenshots. Use WebP with lossless screenshot compression at original resolution.
- Keep public documentation focused on current product behavior, excluding internal handoffs, runtime evidence, machine paths and historical test screenshots.
- Pin official host dependencies throughout the compatibility graph and verify installed versions, fixing mixed prerelease dependencies; retain seven-host and real-browser regression coverage.

### Existing capabilities retained in 1.0

These capabilities were already available in 0.x and remain supported; they are not all new in this release:

- Global and current-session project discovery, search, details, diagnostics and per-skill or per-source toggles, for both ordinary workspaces and Git projects.
- Project precedence, independent same-name copies and global fallback after disabling a copy. Toggles affect DSH invocation without modifying other agents' source files.
- Sources including DSH, Shared Agent, CC Switch, Codex, Claude Code, Gemini, OpenCode, Cursor, Copilot, Windsurf, Trae, OpenClaw, Roo and CodeBuddy.
- Skill creation and ZIP, folder or SKILL.md import into global DSH; Trash, restore and permanent deletion for DSH skills.
- Plugin version checking and update controls, plus Chinese and English interfaces.

### Upgrade and boundaries

- After publication, update the plugin through Settings → Skills → Check for updates or rerun the README installation command, then restart DSH and refresh the page. Repository Refresh & check updates checks skill contents, not the plugin version.
- No manual migration of existing skills is required. Users of local 0.1.54 test builds should back up skills and skills-manager state under DSH_HOME before upgrading.
- Only public GitHub repositories, global DSH installation and manually confirmed updates are supported. Private credentials, automatic updates, bulk overwrites and project-level repository installation are not included.
- Repository archives are limited to 32 MiB; subdirectory filtering does not reduce download size. Backups are not automatically deleted, and only the most recent backup has a quick rollback action. Forced termination or power loss may require manual recovery.
- Supported DSH versions: 0.1.0-rc.8, 0.1.1-rc.2, 0.1.2-rc.1, 0.1.5-rc.1, 0.1.5-rc.2, 0.1.6-alpha.1 and 0.1.6-alpha.2. Node.js: ^22.19.0 or >=24.0.0.

## 0.1.53 - 2026-09-18

- Fix the empty Project tab on official DeepSeek Harness `0.1.6-alpha.2`. Session lists no longer expose a current-session field; the tab now follows the session shown in the main view, while older hosts keep the previous current-session binding.
- Add support for DeepSeek Harness `0.1.6-alpha.2` while retaining the six previously supported versions.
- Use a bilingual package.json description matching the GitHub repository.

## 0.1.52 - 2026-09-16

- Add support for DeepSeek Harness `0.1.6-alpha.1` while retaining support for the five previously supported versions; skill discovery, enable/disable policies, and management workflows remain unchanged.
- Canonicalize isolated-host sandbox paths so Windows 8.3 temp directories still match project skill roots in CI.

## 0.1.51 - 2026-09-16

- Add support for DeepSeek Harness `0.1.6-alpha.1` while retaining support for the five previously supported versions; skill discovery, enable/disable policies, and management workflows remain unchanged.

## 0.1.50 - 2026-09-12

- Fix project skills being skipped in non-Git workspaces. When no `.git` ancestor exists, use the current session cwd as the project root so skills can be viewed and toggled without running `git init`.

## 0.1.49 - 2026-09-12

- Add Copilot support for global `~/.copilot/skills` and project `.github/skills`, and expand project sources for common agents. The project tab follows only the current session; direct project-management API calls must include its ID in `x-dsh-skills-session`.
- Prioritize project copies over global copies and toggle each source independently. Another enabled copy can take over when one is disabled, with the active source identified in the UI; invocation is blocked only when all copies are disabled.
- Give Global, Project, and Trash separate tabs, group skills into collapsible sources, hide long descriptions, and remove redundant information. Creation and import always save to global DSH; generic project `skills/` directories use a neutral source label.
- Fix update buttons and dialogs not following language changes, and align Trash date formatting and import-warning separators with the UI language.
