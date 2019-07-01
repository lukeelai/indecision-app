// grab the add function from the add.js file in the utils folder
// grab react from the npm modile
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// without constructor component
// class NewSyntax {
//   name = "test";
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
