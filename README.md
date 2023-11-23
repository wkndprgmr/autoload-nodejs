# autoload

Simplify loading modules in a directory, reduce churn...

I want to make things like this "better":

```
# routes/index.js
const homepage = require("./homepage");
const about = require("./about");
// etc...

module.exports = {
  homepage,
  about,
  // etc...
};
```

Instead, I want to reduce the amount of churn on the routes/index.js by doing this:

```
# routes/index.js
const autoload = require("@wkndprgmr/autoload");

module.exports = autoload(__dirname);
```

Switching to `autoload` should not require any changes to code like:

```
# routes/homepage.js
module.exports = () => "show me a homepage";

# app.js
const routes = require("./routes");

routes.homepage();
// etc...
```

### todo

- [ ] Improve test coverage (error handling)
- [ ] Add test cases for excluding directories
- [ ] Add support for ES modules
- [ ] Address potential performance issues, maybe have a benchmarking test
