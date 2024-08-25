---
layout: doc
---

# What are Semantic Commit Messages?

In the world of software development, the way we communicate changes to our codebase is just as crucial as the code itself. Hence we use Semantic Commit Messages. Let's dive into what they are, why they matter, and how to implement them effectively.

```bash

Format: <type>(<scope>): <subject>
<scope> is optional
```

#### Example

```bash
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

## Details

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)
