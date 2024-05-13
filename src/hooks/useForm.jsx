import React, { useState } from "react";

function useForm(initialState = {}, onSubmit = () => {}) {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };
  return { values, handleChange, handleSubmit };
}

export default useForm;
