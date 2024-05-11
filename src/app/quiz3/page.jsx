import React from "react";
import ArrForm from "./component/ArrForm";

export default function page() {
  const arr1 = [
    { code: 101, name: "AAA" },
    { code: 103, name: "BBB" },
    { code: 102, name: "CCC" },
  ];

  const arr2 = [
    { code: 103, city: "Singapore" },
    { code: 102, city: "Tokyo" },
    { code: 101, city: "Bangkok" },
  ];

  const arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i].code == arr2[j].code) {
        let emp = {};
        emp.code = arr1[i].code;
        emp.name = arr1[i].name;
        emp.city = arr2[j].city;
        arr3.push(emp);
      }
    }
  }

  return (
    <div className="p-4 ">
      <div className="flex gap-4">
        <ArrForm arr={arr1} tag="name" title="Array1" />
        <ArrForm arr={arr2} tag="city" title="Array2" />
      </div>
      <div>
        <hr className="border my-4" />

        <ArrForm arr={arr3} tag="name" title="Array3" city="city" />
      </div>
    </div>
  );
}
