const autoload = require("@wkndprgmr/autoload");
const path = require("path");
const utils = require("./utils");
console.log(__dirname);
const utils2 = autoload(path.join(__dirname, "utils"));

console.log(utils.reverse("what does this look like reversed?"));
console.log(utils2.reverse("what does this look like reversed?"));
