<p align="center"><a href="https://olivecode.dev/"><img src="https://olivecode.dev/assets/logo-dark.svg" width="420" alt="OliveCode"></a></p>

# Your first OliveCode task

A tiny project. Ten tests. One function to fix.

Try a coding agent on a disposable example before giving it your own project. Nothing to subscribe to and no project dependencies to install. You need **Node.js 18+** and [OliveCode](https://olivecode.dev/guide).

**[Use this template](https://github.com/new?template_name=olivecode-starter&template_owner=BenjaminZajko) · [Download ZIP](https://github.com/BenjaminZajko/olivecode-starter/archive/refs/heads/main.zip) · [Install OliveCode](https://olivecode.dev/guide)**

## 1. Get the project

Download and unzip it, or use Git:

```sh
git clone https://github.com/BenjaminZajko/olivecode-starter.git
cd olivecode-starter
```

## 2. See what needs fixing

```sh
node --test slug.test.mjs
```

**Expected: 4 pass, 6 fail.** The failures are intentional. `slug.mjs` only handles the simplest input so far.

## 3. Let OliveCode work

Run this in the same folder:

```sh
olivecode
```

Choose a connected free cloud model or a suitable downloaded local model. On a fresh installation, set up **Cloud** or **Local** first. Then paste:

```text
Fix slug.mjs so all existing slug.test.mjs cases pass.
Read the files, change only slug.mjs, run node --test slug.test.mjs,
and report the actual results. Do not modify the tests.
```

## 4. Check the result yourself

Run the test command again. The target is **10 pass, 0 fail**. If you cloned with Git, inspect:

```sh
git diff -- slug.mjs slug.test.mjs
```

Only `slug.mjs` should change. If you downloaded the ZIP, compare the tests with the untouched downloaded file. A confident final message is not a substitute for the test output.

## What this checks

`slugify` should lowercase ASCII letters, retain digits, replace runs of characters outside `a-z` and `0-9` with one hyphen, and trim hyphens at either end. These ten cases test a small coding task; passing them is not proof of general correctness or large-project performance. Unicode transliteration is outside this example's scope.

This is a Node.js port of the maintainer-authored [OliveCode slugify example](https://github.com/BenjaminZajko/opencodeFORK/tree/dev/docs/examples/slugify). Its earlier recorded AI run used the original Bun/TypeScript version. No new AI run or performance result is claimed for this starter.

## Free, with the limits explained

OliveCode has no subscription or usage cap of its own. Cloud providers retain their quotas and availability limits; local model performance depends on your hardware. Assist can use other configured models, so choosing a local model alone does not establish fully offline operation. OliveCode is an OpenCode-based public preview; review its changes and approvals.

**Stuck?** [Setup guide](https://olivecode.dev/guide) · [First-run feedback](https://github.com/BenjaminZajko/opencodeFORK/issues/new?template=olivecode-first-run.yml)

Report your OS, OliveCode version, chosen model, test output and what happened. Do not post tokens, private project files or personal information.

## Verify a patch with any coding agent

The [verify-a-patch skill](skills/verify-a-patch/SKILL.md) is a portable review workflow: establish a baseline, inspect the actual diff, preserve the original checks, and report only results that were run. It has no service, signup, or OliveCode dependency. Read it directly or use your agent's supported skill loader.

Want to help improve the first run? [Follow the task and send feedback](https://olivecode.dev/try). GitHub feedback is public; the page also offers private email feedback.
