import { glob, globSync } from "glob";

globSync(
  "./test/support/**/*.js",
  {
    ignore: ["./test/support/index.js"]
  }
).forEach(file => {
  /* Add test namespace */
  global.App.test = {}

  /* Load and decorate */
  require(file).default(global.App);
});