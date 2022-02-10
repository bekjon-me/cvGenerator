import React from "react";
import { useContext } from "react";
import MyContext from "../context";

export default function Education() {
  const {
    university,
    setUniversity,
    eduCity,
    setEduCity,
    eduDegree,
    setEduDegree,
    subject,
    setSubject,
    eduFrom,
    setEduFrom,
    eduTo,
    setEduTo,
  } = useContext(MyContext);

  return (
    <div className="mt-5">
      <h3>Education</h3>
      <input
        className="form-control my-3"
        type="text"
        name="university"
        placeholder="University Name"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="city"
        placeholder="City"
        value={eduCity}
        onChange={(e) => setEduCity(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="degree"
        placeholder="Degree"
        value={eduDegree}
        onChange={(e) => setEduDegree(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="from"
        placeholder="From"
        value={eduFrom}
        onChange={(e) => setEduFrom(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        name="to"
        placeholder="To"
        value={eduTo}
        onChange={(e) => setEduTo(e.target.value)}
      />
    </div>
  );
}
