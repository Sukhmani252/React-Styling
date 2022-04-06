// const { createElement } = require("react");
var React = require("react");
var ReactDOM = require("react-dom");

// ReactDOM.render(<div>
//   <h1>Hello World!</h1>
//   <p>This is a paragraph</p>
//   </div>
//   , document.getElementById("root"));

//HTML elements are picked by Babel compiler and then converted into javascript
//Babel is inside react component

// var h1 = document.createElement("h1");
// h1.innerHTML = "This is JSX";
// document.getElementById("root").appendChild(h1);

const fname = "Mani";
const lname = "Arora";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello
    </h1>
    <img src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);

//in JSX, img tag must have closing tag <img/>
//We can write any javascript expression(something which evaluate to an value) inside {}, but we cannot write
//statements like if statement
