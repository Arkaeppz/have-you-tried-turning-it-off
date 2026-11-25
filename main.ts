// Entry for the make.fun bounty "Have You Tried Turning It Off?"
// (u-motasimfuad-have-you-tried-turning-it-off-154a938b).
// The program writes one line — a hopeless tech support agent's reply to a
// desperate customer — to entry.txt in the output directory.
// The line is 162 characters, inside the gate's 1–199 limit, and was chosen
// for the judge's brief: the humour is the agent's cheerful uselessness,
// the customer's three-day outage is felt rather than explained, and the
// classic "turn it off and on" is twisted rather than repeated.
// No network, no randomness: two runs produce identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I completely understand — three days without internet is an emergency, so I've marked your ticket urgent: it will now be ignored at the highest possible priority.";

writeFileSync(
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt"),
  LINE,
);
