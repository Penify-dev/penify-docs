---
title: Git Commit Changes Documentation with Penify-CLI
description: Learn how to use Penify-CLI to automatically generate documentation for recent changes in your Git repository, helping you track and understand evolving codebases.
keywords: Penify-CLI, Git changes, documentation generation, code documentation, version control, changelog
author: Suman Sauarbh
linkedInUrl: https://www.linkedin.com/in/ssumansaurabh/
image: https://media.licdn.com/dms/image/v2/D5603AQEDru6Q4UkzEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681498321113?e=1730332800&v=beta&t=PM0PsCMZs4Ar0TIweuSdqU-P7kuWLm9gmEZ_spGFDsw
---

# Git Commit Changes Documentation

Penify-CLI can generate documentation of classes/functions for your recent changes in your Git repository, helping you keep track of evolving codebases.

## Login

Login to Penify, make sure you have an account or you have [created an account](https://www.penify.dev/).

```bash
penify-cli login
```

## Usage

To document recent Git changes:

```bash
cd /path/to/folder
penify-cli doc-gen
```

### Options

- `-t, --token`: Your Penify API token
- `-gf, --git_folder_path`: Path to the Git repository you want to document

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

For more information on managing and documenting Git changes, see our [Git Workflow Guide](/docs/git-workflow-guide.md).