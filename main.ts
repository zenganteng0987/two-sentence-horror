// Two-Sentence Horror — make.fun entry
// Writes exactly one two-sentence horror story to /output/entry.txt.
// Deterministic: no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "The nurse said my grandfather's coma was a mercy, that he felt nothing. " +
  "I held his hand all night, and every time I let go, his fingers tightened around mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
