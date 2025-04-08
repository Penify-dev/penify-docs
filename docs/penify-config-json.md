---
layout: doc
title: "Penify Configuration: Complete Guide to penify.config.json"
description: "Learn how to configure Penify with the penify.config.json file. This guide covers all configuration options including API documentation, architecture documentation, repository analysis settings, and Git commit preferences."
keywords: Penify configuration, penify.config.json, API documentation, architecture documentation, repository analysis, Git integration, documentation generation, OpenAPI, developer workflow
author: Suman Saurabh
linkedInUrl: https://www.linkedin.com/in/ssumansaurabh/
image: https://www.penify.dev/_next/static/media/suman.1cf25c09.webp
---

# Penify Configuration (penify.config.json)

The `penify.config.json` file is the central configuration resource for Penify. It controls how Penify generates documentation, analyzes your repository, and interacts with Git. This file should be placed in the root directory of your project.

## Complete Configuration Example

Below is a complete example of a `penify.config.json` file with all available options:

```json
{
  "ignore": ["node_modules", ".git", ".github", "docs"],
  "should_use_git_ignore": true,
  "api_docs": {
    "open_api_file": "openapi.json",
    "generate_example": false,
    "host_documentation": true,
    "commit_output": {
      "commit_to_git": true,
      "branch": "main",
      "path": "docs/openapi_penify.json"
    }
  },
  "arch_docs": {
    "host_documentation": true,
    "generate_pdf": true,
    "generate_md": true,
    "commit_output": {
      "commit_to_git": false,
      "branch": null,
      "path": "docs"
    }
  },
  "analyze_repo": {
    "send_email": true,
    "email": "developer@example.com",
    "ignore": ["node_modules", ".git", ".github", "public", "dist", "test*", "docs*"]
  }
}
```

## Configuration Options

### Root Level Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ignore` | Array of Strings | `["node_modules", ".git", ".github", "docs"]` | Global patterns to ignore when processing files. These patterns apply to all Penify operations unless overridden in specific sections. |
| `should_use_git_ignore` | Boolean | `true` | When set to `true`, Penify will respect patterns in your `.gitignore` file in addition to the ignore patterns specified in this configuration. |
| `api_docs` | Object | See [API Documentation](#api-documentation) | Configuration for API documentation generation. |
| `arch_docs` | Object | See [Architecture Documentation](#architecture-documentation) | Configuration for architecture documentation generation. |
| `analyze_repo` | Object | See [Repository Analysis](#repository-analysis) | Configuration for repository analysis features. |

### API Documentation

The `api_docs` section configures how Penify generates API documentation from your OpenAPI specification.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `open_api_file` | String | `"openapi.json"` | Path to your OpenAPI specification file, relative to your project root. |
| `generate_example` | Boolean | `false` | When set to `true`, Penify will generate example requests and responses for your API endpoints. |
| `host_documentation` | Boolean | `true` | When set to `true`, Penify will set up hosted documentation for your API that can be accessed through the Penify platform. |
| `commit_output` | Object | See [Commit Output](#commit-output) | Configuration for how API documentation is committed to your repository. |

### Architecture Documentation

The `arch_docs` section configures how Penify generates architectural documentation for your project.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `host_documentation` | Boolean | `true` | When set to `true`, Penify will host the architectural documentation on the Penify platform. |
| `generate_pdf` | Boolean | `true` | When set to `true`, Penify will generate PDF documentation for your project architecture. |
| `generate_md` | Boolean | `true` | When set to `true`, Penify will generate Markdown documentation for your project architecture. |
| `commit_output` | Object | See below | Configuration for how architecture documentation is committed to your repository. Default values differ from API documentation. |

Default `commit_output` for architecture documentation:
```json
{
  "commit_to_git": false,
  "branch": null,
  "path": "docs"
}
```

### Repository Analysis

The `analyze_repo` section configures Penify's repository analysis capabilities, which provide insights about your codebase.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `send_email` | Boolean | `true` | When set to `true`, Penify will send email reports of repository analysis results. |
| `email` | String | `null` | Email address where repository analysis reports will be sent. If not specified, it will use the email associated with your Penify account. |
| `ignore` | Array of Strings | `["node_modules", ".git", ".github", "public", "dist", "test*", "docs*"]` | Patterns to ignore during repository analysis. This overrides the global `ignore` setting for repository analysis operations. |

### Commit Output

The `commit_output` object appears in both `api_docs` and `arch_docs` sections and controls how documentation is committed to your repository.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `commit_to_git` | Boolean | Varies | When set to `true`, Penify will automatically commit generated documentation to your repository. |
| `branch` | String or null | `null` | The branch where documentation should be committed. If `null`, Penify will use your default branch. |
| `path` | String | Varies | The path where documentation files will be written, relative to your project root. |

## Usage with Penify CLI

The `penify.config.json` file is automatically detected by the Penify CLI when running commands like:

```bash
# Generate documentation using settings from penify.config.json
penifycli docgen

# Analyze repository using settings from penify.config.json
penifycli analyze
```

You can also specify a different configuration file using the `--config` flag:

```bash
penifycli docgen --config custom-penify.config.json
```

## Creating a Configuration File

The simplest way to create a configuration file is with the interactive configuration command:

```bash
penifycli config init
```

This will guide you through a series of prompts to create a customized `penify.config.json` file for your project.

Alternatively, you can create the file manually in your project root directory using the example provided above as a starting point.