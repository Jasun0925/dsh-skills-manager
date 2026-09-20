# Skill repositories

[简体中文](02-技能仓库管理.md)

## Add and install

Open **Settings → Skills → Repositories → Add repository**. Enter `owner/repo` or a public GitHub repository URL. Branch/tag and skill subdirectory are optional. An empty branch uses the remote default branch; an empty subdirectory scans the entire repository.

URLs may include `tree/branch/subdirectory`. For branch names containing a slash, enter the repository root URL and set the complete branch name in the separate field. Access tokens, URL query parameters, non-GitHub domains and HTTP URLs are rejected.

Adding a repository scans it immediately. A failed scan keeps the subscription so you can retry from **Manage repositories**. Expand a group or use search and status filters to find a skill. Open **Details** to review its instructions before installing.

**Install** copies one skill and its resources into the global DSH skills directory. Installation does not execute downloaded scripts and never overwrites a same-name local skill. Existing skills remain available in the Global tab for enabling, disabling or moving to Trash.

## Status and source

| Status | Meaning |
|---|---|
| Available | No same-name local skill was found. |
| Installed | A complete installation record matches the local skill files. |
| Update available | The scanned skill differs from its recorded installed version. |
| Name conflict | A same-name skill exists, or the tracked local copy has changed. Installation is disabled. A tracked copy can still be reviewed for an explicit update. |
| Invalid | The skill needs valid frontmatter, a supported name and a description. Fix the repository and scan again. |

The Global tab shows a repository link for tracked installations; other skills show Local. The source group identifies the storage location. Choose **More → Manage updates** to locate a tracked skill in Repositories.

Removing a repository removes only the subscription. Installed files and source records remain. Add the same repository configuration again to resume updates.

## Refresh, update and restore

**Refresh & check updates** scans subscribed repositories and compares all skill files, including scripts and resources. It does not install or replace local files. Changes elsewhere in a repository do not by themselves mark a skill as needing an update.

**Review update** shows added, modified and removed files. Confirm **Back up and update** to replace the directory. Local modifications are protected by default; replacing them requires the explicit **Back up local edits and replace** action. If files or the scanned version change after preview, a new preview is required.

**Restore previous version** also requires preview and confirmation. The current directory is backed up before restoration. Backups include local edits, so a restored edited copy may correctly display Name conflict.

Backups are stored under `$DSH_HOME\skills-manager\repository-backups`. They are not automatically deleted, and disk usage grows with updates. The UI offers the most recent backup for quick restoration; older backup directories remain on disk. Ordinary replacement or state-write failures roll back the directory. Abrupt process termination or power loss during replacement may require manual recovery.

## Interrupted installation

If files were installed but the source record could not be confirmed, the UI reports a tracking-state error. Restore disk space or write permission and reopen Repositories. Recovery verifies the complete directory against the pending file list and hashes, then saves the recovered record.

Extra, missing or modified files and directory links prevent automatic recovery. Existing files are preserved for inspection. Installation, update preview, update and rollback also retain recovery checks; adding, removing or refreshing subscriptions does not scan unrelated pending installations.

## Downloads, cache and limits

Downloads use `codeload.github.com` directly, without GitHub REST API requests or anonymous API quota consumption. With no explicit branch, the plugin tries HEAD and only falls back to main/master after a 404. For an explicit branch, a 404 may fall back to a same-name tag. A 403 or timeout does not trigger unrelated branch guesses.

A scan version is the archive SHA-256 digest, not a Git commit ID. Verified archives are cached under `$DSH_HOME\skills-manager\repository-cache`. Installation and updates reuse that snapshot. Missing or corrupted cache entries require a new scan; the plugin never silently substitutes newer remote contents. A successful scan retains the current archive for that subscription; a failed scan preserves the previous catalog and cache.

Limits:

- 30 repositories; 500 skills per repository; approximately 4 MiB of combined skill-document content.
- 32 MiB downloaded archive; 64 MiB expanded content; 10,000 archive entries; 1,000 files per imported skill.
- 256 KiB per skill document; paths up to 512 characters and 64 components.
- A 60-second timeout per network request; redirects are not followed.

A subdirectory filter does not reduce download size: the complete repository archive is downloaded first. Choose a smaller repository when the archive exceeds the limit.

State is stored in `$DSH_HOME\skills-manager\repositories.json`. Corrupted state prevents writes; preserve the file and repair it rather than deleting tracking information. Older 40-character commit records remain readable, while new scans use 64-character archive digests.

Only public GitHub repositories and global DSH installation are supported. Private credentials, automatic updates, bulk overwrite and project-level installation are not provided.
