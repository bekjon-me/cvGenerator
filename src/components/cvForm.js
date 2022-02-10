import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/cvForm.css";
import MyContext from "../context";
import Education from "./education";
import Experience from "./experience";
import ReadyCv from "./readyCv";

import { PDFExport } from "@progress/kendo-react-pdf";

export default function CvForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([
    "https://michalosman.github.io/cv-application/static/media/example_photo.7a684f97.jpg",
  ]);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  //   Experience Section
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  // EDUCATION SECTION

  const [university, setUniversity] = useState("");
  const [eduCity, setEduCity] = useState("");
  const [eduDegree, setEduDegree] = useState("");
  const [subject, setSubject] = useState("");
  const [eduFrom, setEduFrom] = useState("");
  const [eduTo, setEduTo] = useState("");

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const componentRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
  };

  const saveResume = (event) => {
    componentRef.current.save();
  };

  const loadExample = () => {
    setName("Bekjon");
    setLastName("Ishpulatov");
    setTitle("Junior Web Developer");
    setAddress("Karshi, Uzbekistan");
    setNumber("+998901234567");
    setEmail("example@gmail.com");
    setDescription(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem nulla aperiam consequuntur cupiditate aspernatur officiis quae dolorem sequi voluptates?"
    );
    setPosition("Junior");
    setCompany("EPAM Systems");
    setCity("Qarshi");
    setFrom("2020");
    setTo("present");
    setUniversity("Qarshi davlat universiteti");
    setEduCity("Qarshi");
    setEduDegree("2");
    setSubject("Geography");
    setEduFrom("2020");
    setEduTo("2024");
  };

  return (
    <MyContext.Provider
      value={{
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
        setPosition,
        setCompany,
        setCity,
        setFrom,
        setTo,
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
      }}
    >
      <div className="container  mt-5">
        <form className="myForm p-4" onSubmit={submit}>
          <input
            required
            className="form-control my-3"
            type="text"
            name="name"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            className="form-control my-3"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            required
            className="form-control my-3"
            type="text"
            name="title   "
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            required
            className="form-control"
            type="file"
            multiple
            accept="image/*"
            id="formFile"
            onChange={onImageChange}
          />
          <input
            required
            className="form-control my-3"
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            required
            className="form-control my-3"
            type="text"
            name="number"
            placeholder="Phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            required
            className="form-control my-3"
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            className="form-control"
            placeholder="Description"
            id="floatingTextarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <Experience />
          <Education />
          <button
            type="submit"
            className="form-control btn btn-success"
            onClick={saveResume}
          >
            Generate as pdf
          </button>
          <button
            onClick={loadExample}
            className="btn btn-primary form-control my-2 p-2"
          >
            Load example
          </button>
        </form>

        <PDFExport ref={componentRef} paperSize="A4" fileName="My CV">
          <ReadyCv />
        </PDFExport>
      </div>
    </MyContext.Provider>
  );
}
