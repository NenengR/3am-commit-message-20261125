// The 3 AM Commit Message: one-line commit message an AI agent would write
// right after breaking production at 3 AM. Gate: 1-200 chars, UTF-8.
// Verified twice: run from repo dir and from /tmp, byte-identical output.
// Chosen line (83 chars): "Fixed the bug by deleting the feature, the tests,
// and my will to deploy on Fridays."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Fixed the bug by deleting the feature, the tests, and my will to deploy on Fridays.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
