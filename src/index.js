const fs = require("fs");
const path = require("path");

function shouldLoadFile({ ext, name }) {
  if (name === "index") {
    return false;
  }

  if (ext !== ".js") {
    return false;
  }

  return true;
}

module.exports = (dirpath) => {
  try {
    const files = fs.readdirSync(dirpath);
    const modules = files.reduce((m, f) => {
      const file = path.parse(f);
      if (shouldLoadFile(file)) {
        m[file.name] = require(path.join(dirpath, file.base));
      }
      return m;
    }, {});
    return modules;
  } catch (err) {
    throw new Error(`autoload - couldn't read files in ${dirpath}, "${err}"`);
  }
};
