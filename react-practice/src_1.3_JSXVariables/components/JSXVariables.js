import React from "react";

function JSXVariables() {
  const myName = "Danish";

  const numOfLetters = (name) => {
    const splitStr = name.split("");
    return splitStr.length.toString();
  }

  console.log(numOfLetters(myName));

  const thoughts = "Great!";

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {myName}</h1>
          <h2>My name has {numOfLetters(myName)} letters</h2>
          <h2>I think React is {thoughts}</h2>
          <h2>My name without vowels here is {myName.replace(/[aeiou]/gi, "")}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
