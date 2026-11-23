import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word, first thought: a moonwalk — the dance step and the walk
// on the moon at once. Surprising, vivid, and it carries its own music.
const WORD = "moonwalk";

// Guard: the entry must be exactly one word, 1-24 chars, no spaces.
if (!/^[A-Za-z]{1,24}$/.test(WORD)) {
  throw new Error("word must be a single word of 1-24 letters");
}
const content = WORD + "\n";
if (content.length > 24) {
  throw new Error("entry.txt must be at most 24 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), content, "utf8");
