import test from "node:test"
import assert from "node:assert/strict"
import { slugify } from "./slug.mjs"

for (const [input, expected] of [
  ["Hello World", "hello-world"],
  ["  Hello   World  ", "hello-world"],
  ["Ship It Now", "ship-it-now"],
  ["Fix: bug #42!", "fix-bug-42"],
  ["already-a-slug", "already-a-slug"],
  ["a---b___c", "a-b-c"],
  ["", ""],
  [" --- !!! ", ""],
  ["Version 2", "version-2"],
  ["API / Client", "api-client"],
]) {
  test(JSON.stringify(input), () => assert.equal(slugify(input), expected))
}
