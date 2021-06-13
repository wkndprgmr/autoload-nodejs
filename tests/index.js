const test = require("ava");
const autoload = require("../src/index.js");
const path = require("path");

test("autoload is a function", (t) => {
  t.true(typeof autoload === "function");
});

test("autoload function takes a dir", async (t) => {
  const test1 = autoload(path.join(__dirname, "fixtures", "test1"));
  t.is(test1.a, "a");
  t.is(test1.b, "b");
});

test("autoload works within dir with index", async (t) => {
  const test2 = require("./fixtures/test2");
  t.is(test2.c, "c");
  t.is(test2.d, "d");
});
