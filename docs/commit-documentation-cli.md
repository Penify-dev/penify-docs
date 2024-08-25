---
layout: doc
---

# Git Commit Changes Documentation

Penify-CLI can generate documentation of classes/functions for your recent changes in your Git repository, helping you keep track of evolving codebases.

## Usage

To document recent Git changes:

```bash
penify-cli doc-gen -t your_api_token -gf /path/to/your/repo
```

### Options

- `-t, --token`: Your Penify API token
- `-gf, --git_folder_path`: Path to the Git repository you want to document

## Example

```bash
penify-cli doc-gen -t your_token -gf /path/to/project
```

## Output

The generated documentation will typically include:

- Summary of recent changes
- Detailed explanations of modified files
- Impact analysis of the changes
- Suggestions for further documentation or testing

## Best Practices

- Run Git changes documentation after significant feature additions or bug fixes
- Use the output to update your project's changelog
- Incorporate Git changes documentation into your code review process

For more information on managing and documenting Git changes, see our [Git Workflow Guide](git-workflow-guide.md).