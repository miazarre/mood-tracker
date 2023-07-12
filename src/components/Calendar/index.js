import React, { useEffect, useState } from "react";
import LogOut from "./LogOut";
import Calendar from "react-calendar";

const CalendarItem = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <LogOut />
      <div className="flex flex-row flex-wrap items-start mt-10 mb-0 p-10">
        <Calendar
          onChange={onChange}
          showWeekNumbers
          value={value}
          className="flex max-w-full basis-420px flex-col grow-100 items-stretch pt-10"
        />
      </div>
    </>
  );
};

export default CalendarItem;
