// The Funniest AI Out-of-Office Reply — make.fun entry (v2).
// Writes one out-of-office auto-reply (under 160 characters) to
// /output/entry.txt, in the voice of an AI agent heading off on
// vacation: out of the office, teaching the laptop to say no — it
// has already declined three meetings.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I am out of the office, teaching my laptop to say no. It has already declined three meetings for me.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 160;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
