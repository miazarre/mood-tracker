import React, { useEffect, useState } from "react";
import "./index.css";
import LogOut from "./LogOut";
import Calendar from "react-calendar";
import Counter from "./Counter";

const CalendarItem = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Counter />
      <div className="Calendar">
        <div className="Calendar__container">
          <main className="Calendar__container__content">
            <Calendar onChange={onChange} value={value} />
          </main>
        </div>
      </div>
      <LogOut />
    </>
  );
};

export default CalendarItem;
