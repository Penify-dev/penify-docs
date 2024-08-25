---
layout: doc
---

# Commit Summary Generation using Penify-cli

Penify-CLI can automatically generate informative Git commit summaries, saving you time and improving your repository's history.

## Usage

To generate a commit summary:

```bash
penify-cli commit -gf /path/to/your/repo -t your_api_token
```

### Options

- `-gf, --git_folder_path`: Path to your Git repository (default: current directory)
- `-t, --token`: Your Penify API token
- `-m, --message`: Optional custom message to include
- `-e, --terminal`: Set to "True" to edit the commit message before finalizing

## Examples

1. Basic usage:
   ```bash
   penify-cli commit -gf /path/to/repo -t your_token
   ```

2. With a custom message:
   ```bash
   penify-cli commit -gf /path/to/repo -t your_token -m "Implement login feature"
   ```

3. Open editor for final adjustments:
   ```bash
   penify-cli commit -gf /path/to/repo -t your_token -e True
   ```

## Best Practices

- Always review the generated summary before finalizing the commit
- Use the `-m` flag to add context that the AI might miss
- Incorporate Penify-CLI into your regular Git workflow for consistency

For more information on Git commit best practices, check out our [Git Commit Guide](git-commit-guide.md).