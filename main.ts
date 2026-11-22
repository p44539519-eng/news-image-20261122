// news-image-20261122 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file: a newspaper front page
// summing up Sunday 22 November 2026 world news in six panels. This program
// copies it to /output/entry.png (MAKEFUN_OUTPUT_DIR stands in outside the
// grader's container).
// The image is 1024x1024 and under the 1 MiB gate cap; the copy is byte-exact
// on every run, so both grader runs produce identical output.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
