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

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
