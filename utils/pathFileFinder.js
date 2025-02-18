import path from "path"
import {fileURLToPath} from "url"

export function pathFileFinder (fileUrl) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, fileUrl);

  return filePath
}
