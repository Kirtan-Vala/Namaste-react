// Normal JS 

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello react";

// let root = document.getElementById("root");
// root.appendChild(heading);

// Using react

const heading = React.createElement("h1", {id: "heading", className: "h1"}, "Namste React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// creating nested tags

        // <div id="parent">
        //     <div id="child1">
        //         <h1></h1>
        //     </div>
        //     <div id="child2">
        //         <h1></h1>
        //     </div>
        // </div>

const nested = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"} ,React.createElement("h1",{},"Child1"), React.createElement("div", {id: "child2"}, React.createElement(("h2"), {}, "Child2")))]);
root.render(nested);