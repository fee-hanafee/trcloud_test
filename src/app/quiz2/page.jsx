"use client";
import React, { useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";

const initialValues = {
  value1: "",
  value2: "",
  value3: "",
  value4: "",
  value5: "",
};
const percents = {
  value1: 100,
  value2: 7,
  value3: 107,
  value4: 3,
  value5: 104,
};

export default function Page() {
  const [input, setInput] = useState(initialValues);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const findValue = (value, percent, percentTarget) => {
    const result = (percentTarget * value) / percent;
    const finalResult = Math.round(result * 1e12) / 1e12
    return finalResult;
  };

  const findIndex = (value) => {
    let index = "";
    for (let i in value) {
      if (value[i] != "") {
        index = i;
      }
    }
    return index;
  };

  const calculateValues = () => {
    try {
      const index = findIndex(input);
      for (let i in input) {
        if (i !== index) {
          let result = findValue(+input[index], +percents[index], +percents[i]);
          setInput((prevInput) => ({ ...prevInput, [i]: result }));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateValues();
  };

  const onClear = () => setInput(initialValues);

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md"
      >
        <div className="flex gap-2 text-center">
          <div>
            <p>100</p>
            <Input onChange={handleChange} name="value1" value={input.value1} />
          </div>
          <div>
            <p>7</p>
            <Input onChange={handleChange} name="value2" value={input.value2} />
          </div>
          <div>
            <p>107</p>
            <Input onChange={handleChange} name="value3" value={input.value3} />
          </div>
          <div>
            <p>3</p>
            <Input onChange={handleChange} name="value4" value={input.value4} />
          </div>
          <div>
            <p>104</p>
            <Input onChange={handleChange} name="value5" value={input.value5} />
          </div>
        </div>
        <div className="flex gap-4">
          <Button type="submit">Go</Button>
          <Button bg="red" type="button" onClick={onClear}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
