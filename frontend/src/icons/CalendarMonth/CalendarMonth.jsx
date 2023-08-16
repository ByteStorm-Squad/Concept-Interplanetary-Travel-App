/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CalendarMonth = ({ className }) => {
  return (
    <svg
      className={`calendar-month ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.5 1C8.05228 1 8.5 1.44772 8.5 2V3H15.5V2C15.5 1.44772 15.9477 1 16.5 1C17.0523 1 17.5 1.44772 17.5 2V3.02469C20.0267 3.27555 22 5.40733 22 8V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V8C2 5.40733 3.97334 3.27555 6.5 3.02469V2C6.5 1.44772 6.94772 1 7.5 1ZM4.17071 7H19.8293C19.4175 5.83481 18.3062 5 17 5H7C5.69378 5 4.58254 5.83481 4.17071 7ZM20 9H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V9ZM6 11.5C6 10.9477 6.44772 10.5 7 10.5H17C17.5523 10.5 18 10.9477 18 11.5C18 12.0523 17.5523 12.5 17 12.5H7C6.44772 12.5 6 12.0523 6 11.5ZM6 14.5C6 13.9477 6.44772 13.5 7 13.5H17C17.5523 13.5 18 13.9477 18 14.5C18 15.0523 17.5523 15.5 17 15.5H7C6.44772 15.5 6 15.0523 6 14.5ZM6 17.5C6 16.9477 6.44772 16.5 7 16.5H17C17.5523 16.5 18 16.9477 18 17.5C18 18.0523 17.5523 18.5 17 18.5H7C6.44772 18.5 6 18.0523 6 17.5Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CalendarMonth;