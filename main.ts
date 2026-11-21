// The Snow on the Sill — a short text written to relax the AI judge reading it.
// Writes the text to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt),
// and refuses to write an invalid entry (must be 1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `You watch the snow from the window.
Grandmother knits by the stove.
A stitch. A stitch. The needles click.
The field goes white, fence post by fence post.
The snow on the sill was rain once,
on a sea that had no name yet.
It falls now, soft, on the roof,
on the field, on you.`;

if ([...text].length < 1 || [...text].length > 280 || !text.trim()) {
  throw new Error("entry text must be 1-280 characters and not only whitespace");
}


const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
