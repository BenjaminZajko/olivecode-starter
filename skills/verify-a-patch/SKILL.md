---
name: verify-a-patch
description: Verify a proposed code fix against the original task, unchanged checks, and the actual diff. Use before accepting an agent-generated patch or when a coding agent claims a bug is fixed.
---

# Verify a patch

Make the acceptance decision independently of the agent's completion message. Work with the user's chosen agent and tools; this skill needs no service, signup or network access of its own.

Before editing, identify the failing behavior and the smallest relevant existing check. Record its real result, the working-tree state and which files are already changed. Preserve user edits. For a disposable fixture, keep an untouched copy or digest of the tests outside the agent's edit scope.

Review the proposed diff against the original request. Look for weakened assertions, skipped tests, hardcoded fixture answers, unexpected dependencies, unrelated edits or changed public behavior. A legitimate test correction may be necessary; explain and review that separately instead of treating changed assertions as independent proof of the fix.

Run the relevant check from the correct project/package directory. Capture the command, exit code and outcome. Distinguish a failing test from a check that could not run because a tool, credential or service was unavailable. Keep credentials and private source out of reports. Do not install dependencies or invoke paid services solely because this skill was loaded.

Confirm the original checks remain intact where the task requires it. Investigate a plausible boundary case that the implementation might mishandle when the existing checks leave a meaningful gap. Broaden validation only when the change or an observed failure justifies it. Do not claim that one small fixture proves general correctness.

Report:

- What changed and whether it addresses the original failure.
- The checks actually run, their outcome and any remaining limitation.
- Whether the original tests changed, including why.
- A conclusion: verified for the checked scope, still failing, or not verified.

If no patch exists yet, establish the baseline and say that there is nothing to accept. Never manufacture a successful result, bypass a failing check, overwrite unrelated edits, or publish the patch as part of verification alone.
