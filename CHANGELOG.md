# Changelog

[简体中文](CHANGELOG.zh-CN.md)

The five most recent published versions are listed below.

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

## 0.1.48 - 2026-09-11

- Add support for DeepSeek Harness `0.1.5-rc.2` while retaining support for the four previously supported versions; skill discovery, enable/disable policies, and management workflows remain unchanged.
