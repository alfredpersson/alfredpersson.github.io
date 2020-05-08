import React, { useState, useEffect } from "react";
import firebase from "./firebase.js";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentErrors, setCurrentErrors] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalErrors, setTotalErrors] = useState([]);
  const [totalTime, setTotalTime] = useState([]);
  const [answer, setAnswer] = useState("");
  const [prevInput, setPrevInput] = useState("");

  var timeTemp = 0;
  var errorsTemp = 0;
  var inputTemp = "";

  const handleSubmit = (event) => {
    event.preventDefault();

    // { time: currentTime, errors: currentErrors }
  };

  const _next = () => {
    if (currentStep == 0) {
      setCurrentStep(1);
    } else {
      if (inputTemp.localeCompare(answer) == 0) {
        reset();
        let currentStep2 = currentStep;
        currentStep2 = currentStep2 >= 6 ? 7 : currentStep2 + 1;

        setCurrentStep(currentStep2);
      }
    }

    if (currentStep == 6) {
      const resultsRef = firebase.database().ref("results");
      const result = {
        time: totalTime,
        errors: totalErrors,
      };
      resultsRef.push(result);
    }
  };

  function checkInput(input) {
    if (answer.localeCompare(input) == 0) {
      let time = Date.now() - currentTime;
      //setCurrentTime(time);
      timeTemp = time;
      console.log(time * 0.001 + "s");
    }
    if (input.length < inputTemp.length) {
      let temp = currentErrors;
      // setCurrentErrors(++temp);
      ++errorsTemp;
    }

    // setPrevInput(input);
    inputTemp = input;
    console.log(currentErrors);
  }

  function reset() {
    let errors = totalErrors;
    let time = totalTime;
    errors.push(errorsTemp);
    time.push(timeTemp);
    setTotalErrors(errors);
    setTotalTime(time);
    setCurrentErrors(0);
    setCurrentTime(0);
    console.log(totalTime);
    console.log(totalErrors);
  }
  /*
   * the functions for our button
   */

  function nextButton() {
    if (currentStep < 7) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={_next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  useEffect(() => {
    setCurrentTime(Date.now());
  }, [currentStep]);

  function Step0() {
    if (currentStep !== 0) {
      return null;
    }
    return (
      <div className="form-group">
        <h2>
          In each step, enter the data that you see above the input field.
        </h2>
      </div>
    );
  }

  function Step1() {
    if (currentStep !== 1) {
      return null;
    }
    setAnswer("20200101");
    return (
      <div className="form-group">
        <label>Enter the date seen above</label>
        <input
          className="form-control"
          id="date2"
          name="date2"
          type="text"
          onInput={(e) => checkInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  function Step2() {
    if (currentStep !== 2) {
      return null;
    }
    return (
      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          onInput={(e) => checkInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  function Step3() {
    if (currentStep !== 3) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          onInput={(e) => checkInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  function Step4() {
    if (currentStep !== 4) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          onInput={(e) => checkInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  function Step5() {
    if (currentStep !== 5) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          onInput={(e) => checkInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  function Step6() {
    if (currentStep !== 6) {
      return null;
    }
    return (
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          onInput={(e) => checkInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  function Step7() {
    if (currentStep !== 7) {
      return null;
    }
    return (
      <div className="end">
        <h2>Thank you!</h2>
      </div>
    );
  }

  function showAnswer() {
    if (currentStep == 0 || currentStep == 7) {
      return null;
    } else {
      return answer;
    }
  }

  return (
    <React.Fragment>
      <h1>Mobile keyboard test </h1>
      <p>Step {currentStep} </p>
      <h1>{showAnswer()}</h1>

      <form onSubmit={handleSubmit}>
        {/* 
        render the form steps and pass required props in
      */}
        <Step0 currentStep={currentStep} />
        <Step1 currentStep={currentStep} />
        <Step2 currentStep={currentStep} />
        <Step3 currentStep={currentStep} />
        <Step4 currentStep={currentStep} />
        <Step5 currentStep={currentStep} />
        <Step6 currentStep={currentStep} />
        <Step7 currentStep={currentStep} />

        {nextButton()}
      </form>
    </React.Fragment>
  );
};

export default Form;
