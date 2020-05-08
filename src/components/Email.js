import React from "react";

import ItemForm from "./ItemForm";

const Email = ({ setForm, formData, navigation }) => {
  const { email } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="Enter the email seen above"
        name="email"
        value={email}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Email;
