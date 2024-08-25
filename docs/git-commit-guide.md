---
layout: doc
---

# Git Commit Guide

This guide outlines best practices for creating clear, informative, and useful Git commits. By following these guidelines and leveraging Penify-CLI, you can maintain a clean and understandable project history.

## 1. Commit Often

- Make small, focused commits rather than large, multi-purpose ones.
- Each commit should represent a single logical change.

## 2. Write Clear Commit Messages

### 2.1 Structure

Use the following structure for your commit messages:

```
<type>(<scope>): <subject>

<body>

<footer>
```

- **Type**: Describes the kind of change (e.g., feat, fix, docs, style, refactor, test, chore)
- **Scope**: Describes what is affected by the change (optional)
- **Subject**: A brief description of the change
- **Body**: A more detailed explanation of the change (optional)
- **Footer**: References to issue trackers, etc. (optional)

### 2.2 Subject Line

- Keep it under 50 characters
- Use imperative mood (e.g., "Add feature" not "Added feature")
- Capitalize the first letter
- Don't end with a period

### 2.3 Body

- Wrap at 72 characters
- Explain what and why, not how
- Use bullet points for multiple points

## 3. Using Penify-CLI for Commit Messages

Penify-CLI can help generate comprehensive commit messages:

```bash
penify-cli commit -gf /path/to/repo -t your_token
```

This command will analyze your changes and generate a commit message. You can then review and edit if necessary.

## 4. Commit Content

- Only commit files that are directly related to the described change
- Don't commit configuration files or compiled files
- Use .gitignore to exclude unnecessary files

## 5. Atomic Commits

- Each commit should be a single, reversible change
- If you need to make multiple changes, make multiple commits

## 6. Use Branches

- Use feature branches for new features or bug fixes
- Keep the main branch stable
- Delete branches after merging

## 7. Commit Best Practices

### 7.1 Don't Commit Half-Done Work

- Use Git's staging area to only commit related changes
- If you need to save half-done work, use Git stash

### 7.2 Test Before You Commit

- Ensure your code compiles and passes tests before committing
- Use pre-commit hooks to run tests automatically

### 7.3 Version Control is not a Backup System

- Commit logical changes, not just your daily work

## 8. Rewriting History

- Use `git commit --amend` for small changes to the last commit
- Use interactive rebase (`git rebase -i`) to clean up multiple commits before pushing

## 9. Good Commit Message Examples

```
feat(auth): implement JWT authentication

- Add JWT token generation in auth service
- Implement token validation middleware
- Update user routes to use new authentication

Closes #123
```

```
fix(api): resolve race condition in user creation

- Add database transaction to ensure atomicity
- Implement retry mechanism for concurrent requests

This fixes a bug where simultaneous user creations
could result in duplicate entries.

Fixes #456
```

## 10. Using Penify-CLI for Commit Analysis

Penify-CLI can help analyze your commits and suggest improvements:

```bash
penify-cli analyze-commits -gf /path/to/repo -t your_token
```

This command will provide feedback on your recent commits and suggest ways to improve them.

## 11. Commit Conventions

Consider adopting a commit convention like Conventional Commits (https://www.conventionalcommits.org/). This can help standardize commit messages across your team and can be useful for automated versioning and changelog generation.

## 12. Reviewing Commits

Before pushing your commits:
- Review the changes using `git diff`
- Use `git log` to ensure your commit history is clean and logical

## 13. Collaborative Commits

When working in a team:
- Communicate with your team about commit standards
- Use pull requests for code review before merging into the main branch
- Consider using Penify-CLI in your CI/CD pipeline to enforce commit message standards

By following these guidelines and leveraging Penify-CLI, you can create a clear, useful, and maintainable Git history that enhances collaboration and project understanding.