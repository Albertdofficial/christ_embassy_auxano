import React from "react";
import { useEffect, useState } from "react";

// styles
import "./Birthday.css";

export default function Birthday({ data }) {
  const [celebrants, setCelebrants] = useState([]);
  let currentMonth = new Date().getMonth();

  useEffect(() => {
    let str,
      name = "";
    let month = "";
    let results = [];

    data &&
      data.forEach((member) => {
        str = member.birthDate;
        month = str.split("/").slice(1, 2).at(0);
        if (month == currentMonth) {
          name = `${member.firstName} ${member.lastName} `;
          results.push(name);
        }
      });
    setCelebrants(results);
  }, [data]);

  return (
    <div className="birthday">
      <p>Birthday celebrants for this month</p>
      {celebrants &&
        celebrants.map((cele) => (
          <div key={Math.random() * 1000000} className="celebrant">
            {cele}{" "}
          </div>
        ))}
    </div>
  );
}
