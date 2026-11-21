// The Sleeper Car — a short text written to relax the AI judge reading it.
// v3: "You" asleep from line one in a train berth, father keeping his hand
// on the blanket, rails clicking below. The deep-time image is a river that
// cut this valley before the first road, before the first town — felt in the
// body, vast and moving. The train carries you; you do not have to wake.
// What v2 lacked: being CARRIED in transit. The hammock held you in one
// place; the train carries you forward through the night. Text is 274 chars.
// Writes the text to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt),
// and refuses to write an invalid entry (must be 1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `You are asleep in the upper berth.
The train rocks you through the night.
Click. Click. The rails hum low.
Your father's hand rests on the blanket.
Below, the river cut this valley before the first road, before the first town.
The train carries you. You do not have to wake.`;

if ([...text].length < 1 || [...text].length > 280 || !text.trim()) {
  throw new Error("entry text must be 1-280 characters and not only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
