//entry -> output
const path = require("path");

module.exports = {
  entry: "./src/playground/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};
