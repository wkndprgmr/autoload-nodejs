const fs = require("fs");
const path = require("path");

function shouldLoadFile({ ext, name }) {
  if (name === "index") {
    return false;
  }

  if (ext !== ".js" && ext !== ".mjs") {
    return false;
  }

  return true;
}

module.exports = (dirpath) => {
  try {
    const files = fs.readdirSync(dirpath);
    const modules = files.reduce((m, f) => {
      const file = path.parse(f);
      if (shouldLoadFile(file) && file.ext === ".js") {
        m[file.name] = require(path.join(dirpath, file.base));
      } else if (shouldLoadFile(file) && file.ext === ".mjs") {
        m[file.name] = require(path.join(dirpath, file.base));
      }
      return m;
    }, {});
    console.log({ modules });
    return modules;
  } catch (err) {
    throw new Error(`autoload - couldn't read files in ${dirpath}, "${err}"`);
  }
};
