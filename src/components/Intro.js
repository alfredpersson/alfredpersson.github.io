import React from "react";


const Intro = (navigation) => {

  const { next } = navigation;

  return (
    <div className="intro">
      <h1>Welcome to a quick test of mobile input keyboards.</h1>
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Intro;
