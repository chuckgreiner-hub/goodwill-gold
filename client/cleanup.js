import fs from "fs";
import path from "path";

const dirs = [
  "node_modules",
  "client/node_modules",
];
const files = [
  "package-lock.json",
  "client/package-lock.json",
  "pnpm-lock.yaml",
  "client/pnpm-lock.yaml",
];

function safeDelete(targetPath) {
  if (fs.existsSync(targetPath)) {
    console.log(`Deleting: ${targetPath}`);
    try {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`✅ Removed ${targetPath}`);
    } catch (err) {
      console.error(`⚠️ Failed to remove ${targetPath}: ${err.message}`);
    }
  }
}

dirs.forEach(d => safeDelete(path.resolve(d)));
files.forEach(f => safeDelete(path.resolve(f)));

console.log("🧹 Cleanup complete!");
