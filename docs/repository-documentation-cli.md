---
layout: doc
---

# Repository Documentation using Penify-cli

Penify-CLI can generate documentation for entire code repositories, giving you a comprehensive overview of your project.

## Login

Login to Penify, make sure you have an account or you have [created an account](https://www.penify.dev/).

```bash
penify-cli login
```

## Usage

To generate documentation for a repository:

```bash
penify-cli doc-gen -cf /path/to/your/repo
```

### Options

- `-t, --token`: Your Penify API token
- `-cf, --complete_folder_path`: Path to the repository you want to document

## Example

```bash
penify-cli doc-gen -cf /path/to/project
```

## Output

The generated documentation will typically include:

- Project structure overview
- Documentation for all files in the repository
- Inter-file dependencies and relationships
- Overall project purpose and functionality

## Best Practices

- Generate repository documentation before major releases or milestones
- Keep your repository documentation up-to-date with regular runs
- Use repository documentation as a starting point for creating user manuals or API docs

<!-- For tips on organizing your repository for optimal documentation, see our [Repository Structure Guide](repo-structure-guide.md). -->