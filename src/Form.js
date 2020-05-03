import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Phone from "./components/Phone";
import Email from "./components/Email";
import Day from "./components/Day";
import Intro from "./components/Intro";
import End from "./components/End";

const steps = [
  { id: "intro" },
  { id: "date2" },
  { id: "number" },
  { id: "email2" },
  { id: "date" },
  { id: "number2" },
  { id: "email" },
  { id: "end" },
];

const defaultData = {
  firstName: "Jane",
  lastName: "Doe",
  nickName: "Jan",
  address: "200 South Main St",
  city: "Anytown",
  state: "CA",
  zip: "90505",
  email: "email@domain.com",
  phone: "+61 4252 454 332",
};

const Form = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "intro":
      return <Intro {...props} />;
    case "date2":
      return <Day {...props} />;
    case "number":
      return <Phone {...props} />;
    case "email2":
      return <Email {...props} />;
    case "date":
      return <Day {...props} />;
    case "number2":
      return <Phone {...props} />;
    case "email":
      return <Email {...props} />;
    case "end":
      return <End {...props} />;

    default:
      return null;
  }
};

export default Form;
