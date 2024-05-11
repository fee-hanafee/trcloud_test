import React from "react";

export default function ArrForm({ arr, tag, title, city }) {
  return (
    <div>
      <h1 className="font-mono font-bold   text-red-500">{title}</h1>
      <table className="border-separate border border-slate-400 ">
        <thead className="border border-collapse">
          <tr>
            <th className="border border-slate-300">Code</th>
            <th className="border border-slate-300">{tag}</th>
            {city && <th className="border border-slate-300">{city}</th>}
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => (
            <tr className="border">
              <td className="border border-slate-300">{el.code}</td>
              <td className="border border-slate-300">{el[tag]}</td>
              {city && <td className="border border-slate-300">{el[city]}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
