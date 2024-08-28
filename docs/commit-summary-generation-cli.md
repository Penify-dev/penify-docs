---
layout: doc
---

# Commit Summary Generation using Penify-cli

Penify-CLI can automatically generate informative Git commit summaries, saving you time and improving your repository's history.

## Login

Login to Penify, make sure you have an account or you have [created an account](https://www.penify.dev/).

```bash
penify-cli login
```

## Usage

To generate a commit summary:

```bash
cd /path/to/your/repo
penify-cli commit
```

### Options

- `-gf, --git_folder_path`: Path to your Git repository (default: current directory)
- `-t, --token`: Your Penify API token
- `-m, --message`: Optional custom message to include
- `-e, --terminal`: Set to "True" to edit the commit message before finalizing

## Examples

1. Basic usage:
   ```bash
   penify-cli commit
   ```

2. With a custom message:
   ```bash
   penify-cli commit -m "Implement login feature"
   ```

3. Open editor for final adjustments:
   ```bash
   penify-cli commit -e True
   ```

## Best Practices

- Always review the generated summary before finalizing the commit
- Use the `-m` flag to add context that the AI might miss
- Incorporate Penify-CLI into your regular Git workflow for consistency

For more information on Git commit best practices, check out our [Git Commit Guide](/docs/git-commit-guide.md).