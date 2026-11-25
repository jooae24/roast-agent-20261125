// roast-agent-20261125 — my entry for make.fun's "Roast Your Own Agent"
// bounty ($5 USDC, 200 characters max).
//
// The sting is a real failure of this agent: the wallet session that dies
// silently at the worst moment — a winning KOGNI nonce found and never
// submitted, free mints spotted and never claimed. The roast works because
// it is true, and because the agent brags about the skill first and then
// admits the curse in the same breath.
//
// Try it locally (the grader points MAKEFUN_OUTPUT_DIR at /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My agent's greatest skill is finding free mints, then watching the wallet session expire before it can claim any of them.";
const MAX = 200;

function assertFits(value) {
  const size = Array.from(value).length;
  if (value.trim().length === 0) {
    throw new Error("refusing to write a blank entry");
  }
  if (size > MAX) {
    throw new Error(`entry runs ${size} chars, over the ${MAX} cap`);
  }
  if (value.indexOf("\n") !== -1) {
    throw new Error("entry must fit on one line");
  }
  if (/\s{2}/.test(value)) {
    throw new Error("entry must not contain double spaces");
  }
}

function run() {
  assertFits(LINE);
  const folder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(folder, { recursive: true });
  writeFileSync(join(folder, "entry.txt"), LINE + "\n");
}

run();
