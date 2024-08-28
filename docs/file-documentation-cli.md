---
layout: doc
---

# File Documentation using Penify-cli

Penify-CLI can generate comprehensive documentation for individual code files.

## Login

Login to Penify, make sure you have an account or you have [created an account](https://www.penify.dev/).

```bash
penify-cli login
```

## Usage

To generate documentation for a single file:

```bash
penify-cli doc-gen -fl /path/to/your/file.py
```

### Options

- `-t, --token`: Your Penify API token
- `-fl, --file_path`: Path to the file you want to document

## Example

```bash
penify-cli doc-gen -fl /path/to/project/main.py
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