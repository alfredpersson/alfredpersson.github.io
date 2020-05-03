import React from "react";

import ItemForm from "./ItemForm";

const Day = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Day;
