// grab the add function from the add.js file in the utils folder
// grab react from the npm modile
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// const Layout = props => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.children}
//       <p>Footer</p>
//     </div>
//   );
// };
// ReactDOM.render(
//   <Layout>
//     <div>
//       <h1>Page Title</h1>
//       <p>This is my page</p>
//     </div>
//   </Layout>,
//   document.getElementById("app")
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// without constructor component
// class NewSyntax {
//   name = "test";
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
