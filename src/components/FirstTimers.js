import React, { useState, useEffect } from "react";

// import css
import "./FirstTimers.css";

const FirstTimers = ({ data }) => {
  const [firstTimers, setFirstTimers] = useState([]);
  let currentMonth = new Date().getMonth();
  let currentMonthName;

  const months = [
    { id: 1, m: "January" },
    { id: 2, m: "February" },
    { id: 3, m: "March" },
    { id: 4, m: "April" },
    { id: 5, m: "May" },
    { id: 5, m: "June" },
    { id: 7, m: "July" },
    { id: 8, m: "August" },
    { id: 9, m: "September" },
    { id: 10, m: "October" },
    { id: 11, m: "November" },
    { id: 12, m: "December" },
  ];

  months.forEach((month) => {
    if(month.id === currentMonth){
        currentMonthName = month.m;
    }
  });

  useEffect(() => {
    let dateJoined, phone, name, date, month;
    const results = [];

    data &&
      data.forEach((member) => {
        if (member.date) {
          dateJoined = member.date;
          date = Number(dateJoined.split("/").slice(0, 1).at(0));
          month = Number(dateJoined.split("/").slice(1, 2).at(0));

          if (month === currentMonth) {
            name = `${member.firstName}  ${member.middleName} ${member.lastName}`;
            phone = member.phoneNumber;
            results.push({name, phone});
          }

        }
      });
    setFirstTimers(results);
  }, [data, currentMonth]);

  return (
    <div className="birthday">
      <h1>First Timers for {currentMonthName} </h1>
      {firstTimers &&
        firstTimers.map((firsttimer) => (
          <div key={Math.random() * 1000000} className="celebrant">
            <p>{firsttimer.name} </p>
            <p>{firsttimer.phone} </p>
          </div>
        ))}
    </div>
  );
};

export default FirstTimers;
