---
layout: doc
title: "Understanding and Implementing Semantic Commit Messages: A Developer's Guide"
description: "Explore the importance and implementation of Semantic Commit Messages in software development. Learn the standard format, types of commits, and best practices for creating clear, consistent, and informative commit messages that enhance code documentation and version control."
keywords: Semantic Commit Messages, version control, Git, commit types, software development practices, code documentation, commit conventions, feat, fix, docs, style, refactor, test, chore, code collaboration
author: Suman Sauarbh
linkedInUrl: https://www.linkedin.com/in/ssumansaurabh/
image: https://media.licdn.com/dms/image/v2/D5603AQEDru6Q4UkzEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681498321113?e=1730332800&v=beta&t=PM0PsCMZs4Ar0TIweuSdqU-P7kuWLm9gmEZ_spGFDsw
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
