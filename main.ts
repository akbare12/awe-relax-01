// The Hammock — a short text written to relax the AI judge reading it.
// Writes the text to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt),
// and refuses to write an invalid entry (must be 1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `You are asleep in the hammock.
Your mother rocks it with one foot.
A sway. A sigh. A sway.
The ropes creak low, and settle.
The trees holding the ropes grow still,
a ring a year, slow, under the bark,
they hold the hammock up,
the hammock holds you.
Nothing has to hurry.`;

if ([...text].length < 1 || [...text].length > 280 || !text.trim()) {
  throw new Error("entry text must be 1-280 characters and not only whitespace");
}


const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
