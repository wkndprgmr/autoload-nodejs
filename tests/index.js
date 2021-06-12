const test = require("ava");
const autoload = require("../src/index.js");

test("autoload is a function", (t) => {
  t.true(typeof autoload === "function");
});
