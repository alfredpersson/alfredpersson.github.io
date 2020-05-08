import React, { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";
import Form from "./Form";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        {/* <BrowserView>
          <h1>This test is only available on a mobile screen.</h1>
        </BrowserView>
        <MobileView> */}
          <Form />
        {/* </MobileView> */}
      </div>
    </div>
  );
}

export default App;
