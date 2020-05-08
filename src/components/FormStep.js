import React, {useEffect} from "react";

const FormStep = ({
  setForm,
  formData,
  navigation,
  type,
  name,
  inputId,
  pattern,
}) => {
  const { data } = formData;

  const { next } = navigation;

  var d = new Date();
  var time;
  var errors = 0,
    prevInput = "";

  function checkInput(input) {
    if (input.length < prevInput.length) {
      ++errors;
    }
    prevInput = input;
  }

  function startTime() {
    time = d.getTime();
    console.log(time);
  }

  function setTime() {
    time = d.getTime() - time;
    console.log(time);
  }

    useEffect(() => {
      startTime();
    }, []);

  return (
    <div className="form">
      <label> {"Enter the " + name + " seen above"}</label>
      <br />
      <input
        name={inputId}
        pattern={pattern}
        type={type}
        value={data}
        onInput={(e) => checkInput(e.target.value)}
        onChange={setForm}
      />
      <div>
        <button onClick={next} onfocus={setTime}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FormStep;
