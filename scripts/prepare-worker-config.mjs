/**
 * Taman Suropati deployment helper.
 * It emits a comment-free JSON config inside dist with assets rooted at the config directory,
 * avoiding the common relative-path doubling when a Pages CI pointer resolves this file.
 */
import { mkdir, writeFile } from "node:fs/promises";

const workerConfig = {
  name: "panduan-taman-suropati",
  compatibility_date: "2026-08-18",
  assets: {
    directory: ".",
    not_found_handling: "single-page-application"
  }
};

await mkdir("dist", { recursive: true });
await writeFile("dist/wrangler.json", `${JSON.stringify(workerConfig, null, 2)}\n`, "utf8");
