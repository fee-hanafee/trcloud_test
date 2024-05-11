"use client";
import React, { useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { nanoid } from "nanoid";

export default function page() {
  const [input, setInput] = useState(0);
  const [stars, setStars] = useState([]);
  const [isReverse, setIsReverse] = useState(false);

  const handleChange = (e) => setInput(e.target.value);

  const createPattern = (value) => {
    const arrStar = [];
    for (let i = 0; i < value; i++) {
      let star = "";
      for (let j = 0; j <= i; j++) {
        star += "*";
      }
      arrStar[i] = star;
    }
    return arrStar;
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (isNaN(input)) return;
      setIsReverse(input % 2 == 0);
      setStars(createPattern(input));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="w-[400px]  flex flex-col gap-2 bg-gray-200 p-4 rounded-md"
      >
        <p className="font-mono">Number of star</p>
        <div className="flex gap-2">
          <Input onChange={handleChange} value={input} />
          <Button type="submit">Go</Button>
        </div>
      </form>
      <div
        className={`${isReverse ? "flex flex-col" : "flex flex-col-reverse"}`}
      >
        {stars.map((star) => (
          <p key={nanoid()}>{star}</p>
        ))}
      </div>
    </div>
  );
}
