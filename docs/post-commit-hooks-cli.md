---
layout: doc
---

# Post-Commit Hooks

Penify-CLI allows you to install and manage Git post-commit hooks for automated workflows.

## Installation

To install a post-commit hook:

```bash
penify-cli install-hook -l /path/to/repo -t your_api_token
```

### Options

- `-l, --location`: Path to the Git repository where you want to install the hook
- `-t, --token`: Your Penify API token

## Uninstallation

To uninstall a post-commit hook:

```bash
penify-cli uninstall-hook -l /path/to/repo
```

### Options

- `-l, --location`: Path to the Git repository from which you want to uninstall the hook

## Examples

1. Install a hook:
   ```bash
   penify-cli install-hook -l /path/to/project -t your_token
   ```

2. Uninstall a hook:
   ```bash
   penify-cli uninstall-hook -l /path/to/project
   ```

## Functionality

The installed post-commit hook will automatically run Penify-CLI after each commit, generating documentation or commit summaries based on your configuration.

## Best Practices

- Use post-commit hooks in conjunction with your CI/CD pipeline
- Regularly update your Penify-CLI to ensure you have the latest hook functionality
- Configure your hook to match your team's workflow and documentation needs

For more information on Git hooks and automation, check out our [Git Automation Guide](git-automation-guide.md).