import React, { useContext } from "react";
import MyContext from "../context";

export default function Experience() {
  const {
    position,
    company,
    city,
    from,
    to,
    setPosition,
    setCompany,
    setCity,
    setFrom,
    setTo,
  } = useContext(MyContext);

  return (
    <div className="mt-5">
      <h3>Experience</h3>
      <input
        className="form-control my-3"
        type="text"
        name="position"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="company"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="from"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="to"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
    </div>
  );
}
