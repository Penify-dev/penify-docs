---
layout: doc
title: "Automating File Documentation with Penify-CLI: A Comprehensive Guide"
description: Learn how to use Penify-CLI to generate detailed documentation for individual code files. This guide covers the usage, options, and best practices for creating comprehensive file-level documentation, enhancing code readability and maintainability.
keywords: Penify-CLI, file documentation, automated documentation, code documentation, developer tools, code readability, maintainability, Python documentation
author: Suman Sauarbh
linkedInUrl: https://www.linkedin.com/in/ssumansaurabh/
image: https://www.penify.dev/_next/static/media/suman.1cf25c09.webp
---

# File Documentation using Penify-cli

Penify-CLI can generate comprehensive documentation for individual code files.

## Login

Login to Penify, make sure you have an account or you have [created an account](https://www.penify.dev/).

```bash
penifycli login
```

## Usage

To generate documentation for a single file:

```bash
penifycli doc-gen -fl /path/to/your/file.py
```

### Options

- `-t, --token`: Your Penify API token
- `-fl, --file_path`: Path to the file you want to document

## Example

```bash
penifycli doc-gen -fl /path/to/project/main.py
```

## Output

The generated documentation will typically include:

- Function and class descriptions
- Parameter explanations
- Return value details
- Usage examples (where applicable)

## Best Practices

- Run Penify-CLI on your files regularly to keep documentation up-to-date
- Review and refine the generated documentation
- Use inline comments for complex logic that may need additional explanation

<!-- For more information on code documentation standards, see our [Documentation Style Guide](doc-style-guide.md). -->