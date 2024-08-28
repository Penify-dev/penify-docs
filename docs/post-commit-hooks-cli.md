---
layout: doc
title: "Post-Commit Hooks Guide for Penify-CLI"
description: "Learn how to install, manage, and use Git post-commit hooks with Penify-CLI for automated documentation workflows."
keywords: Penify-CLI, Git hooks, post-commit hooks, automated documentation, version control, continuous documentation, developer workflow, code documentation, Git automation
---

# Post-Commit Hooks

Penify-CLI allows you to install and manage Git post-commit hooks for automated workflows.

## Login

Login to Penify, make sure you have an account or you have [created an account](https://www.penify.dev/).

```bash
penify-cli login
```

## Installation

To install a post-commit hook:

```bash
cd /path/to/rep
penify-cli install-hook
```

### Options

- `-l, --location`: Path to the Git repository where you want to install the hook
- `-t, --token`: Your Penify API token

## Uninstallation

To uninstall a post-commit hook:

```bash
cd /path/to/repo
penify-cli uninstall-hook
```

### Options

- `-l, --location`: Path to the Git repository from which you want to uninstall the hook


## Functionality

The installed post-commit hook will automatically run Penify-CLI after each commit, generating documentation of the modified code.

## Best Practices

- Use post-commit hooks in conjunction with your CI pipeline.
- Regularly update your Penify-CLI to ensure you have the latest hook functionality
- Configure your hook to match your team's workflow and documentation needs

<!-- For more information on Git hooks and automation, check out our [Git Automation Guide](git-automation-guide.md). -->