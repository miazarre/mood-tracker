import React, { useEffect, useState } from "react";
import LogOut from "./LogOut";
import Calendar from "react-calendar";

const CalendarItem = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <LogOut />
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
};

export default CalendarItem;
