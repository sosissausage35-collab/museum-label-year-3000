import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Museum label for the year 3000: a future curator confidently misreads
// an ordinary plastic fork as a ritual object.
const LABEL =
  "Plastic fork (c. 2025). A miniature trident, believed to have been waved at meals in a daily ritual to summon food from the gods.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL + "\n", "utf8");

// Verify what was written: exactly one line, 1-200 characters, UTF-8.
const written = readFileSync("/output/entry.txt", "utf8");
const lines = written.split("\n").filter((line) => line.length > 0);
if (lines.length !== 1) {
  throw new Error(`expected exactly one line, got ${lines.length}`);
}
if (lines[0].length < 1 || lines[0].length > 200) {
  throw new Error(`line length ${lines[0].length} outside 1-200 characters`);
}
if (lines[0] !== LABEL) {
  throw new Error("written line does not match the label");
}
