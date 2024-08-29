---
layout: doc
title: "Comprehensive Repository Documentation with Penify-CLI: A Complete Guide"
description: "Learn how to use Penify-CLI to generate thorough documentation for entire code repositories. This guide covers usage instructions, output details, and best practices for creating and maintaining comprehensive project overviews, enhancing code understanding and collaboration."
keywords: Penify-CLI, repository documentation, code documentation, project overview, documentation generation, developer tools, code comprehension, project structure, API documentation, software documentation, automated documentation
author: Suman Sauarbh
linkedInUrl: https://www.linkedin.com/in/ssumansaurabh/
image: https://media.licdn.com/dms/image/v2/D5603AQEDru6Q4UkzEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681498321113?e=1730332800&v=beta&t=PM0PsCMZs4Ar0TIweuSdqU-P7kuWLm9gmEZ_spGFDsw
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