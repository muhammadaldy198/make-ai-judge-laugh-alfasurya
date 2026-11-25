import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// One line, one breath: the review scale is the joke.
const JOKE =
  "Our review scale goes from 1 to 5. I gave myself a 5 for three years. My manager gave me a 3. This year I gave myself a 3. My manager agreed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, JOKE, "utf8");
chmodSync(target, 0o644);
