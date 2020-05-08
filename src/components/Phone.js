import React from "react";

import ItemForm from "./ItemForm";

const Phone = ({ setForm, formData, navigation }) => {
  const { number } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="Enter the number seen above"
        name="number"
        value={number}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Phone;
