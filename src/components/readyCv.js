import React, { useContext } from "react";
import "../assets/styles/readyCv.css";
import MyContext from "../context";

function ReadyCv() {
  const {
    name,
    lastName,
    title,
    imageUrls,
    address,
    number,
    email,
    description,
    position,
    company,
    city,
    from,
    to,
    university,
    eduDegree,
    subject,
    eduFrom,
    eduTo,
  } = useContext(MyContext);

  return (
    <div className="container mt-5 ready mb-5">
      <div className="text-center w-100">
        <h1 className="title">
          {name} <span>{lastName}</span>
        </h1>
        <h4>{title}</h4>
      </div>
      <div className="row">
        <div className="col-8 main">
          <div className="description my-5">
            <h5>Description</h5>
            <hr />
            <p className="my-2">{description}</p>
          </div>
          <div className="experience my-5">
            <h5>Experience</h5>
            <hr />
            <div className="row">
              <div className="col-3">
                <p>
                  {from} - <span>{to}</span>
                </p>
              </div>
              <div className="col-9">
                <span style={{ fontWeight: "bold" }}>{position}</span>
                <br />
                <span style={{ fontWeight: "bold" }}>
                  {company}, <span style={{ fontWeight: "500" }}>{city}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="education my-5">
            <h5>Education</h5>
            <hr />
            <div className="row">
              <div className="col-3">
                <p>
                  {eduFrom} - <span>{eduTo}</span>
                </p>
              </div>
              <div className="col-9">
                <span style={{ fontWeight: "bold" }}>{university}</span>
                <br />
                <span style={{ fontWeight: "500" }}>Degree: {eduDegree}</span>
                <br />
                <span style={{ fontWeight: "500" }}>Subject: {subject}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 main-right">
          {imageUrls.map((imageSrc) => (
            <img src={imageSrc} key={Date.now()} />
          ))}
          <h5 className="mt-4">Personal details</h5> <hr />
          <div className="address">
            <span className="span">Address</span>
            <p className="main-right-span" style={{ lineBreak: "auto" }}>
              {address}
            </p>
          </div>
          <div className="phone-number">
            <span className="span">Phone Number</span>
            <p className="main-right-span" style={{ lineBreak: "auto" }}>
              {number}
            </p>
          </div>
          <div className="email">
            <span className="span">Email</span>
            <p
              className="main-right-span"
              style={{ lineBreak: "auto", paddingRight: "25px" }}
            >
              {email}
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="contacts">
          <a href="mailto:bekjonishpulatov8@gmail.com">
            bekjonishpulatov8@gmail.com
          </a>
          <a href="tel:+998908702909">+998908702909</a>
          <p className="text-center copyright">Created by Bekjon &copy;</p>
        </div>
      </footer>
    </div>
  );
}

export default ReadyCv;
