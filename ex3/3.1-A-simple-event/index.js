import { FindRegex } from "./FindRegex.js";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const findRegex = new FindRegex("hello");

findRegex
  .addFile(path.join(__dirname, "test-file-1.txt"))
  .addFile(path.join(__dirname, "test-file-2.txt"))
  .addFile(path.join(__dirname, "test-file-3.txt"))
  .find()
  .on("start", (files) => {
    console.log("regex started", files);
  })

  .on("found", (file, elem) => {
    console.log("found", file, elem);
  })
  .on("error", (err) => {
    console.log("error", err);
  });
