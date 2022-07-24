import React, { useRef } from "react";
import { projectFirestore } from "./config";
import { useHistory } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const title = useRef("");
  const birthDate = useRef("");
  const phoneNumber = useRef("");
  const email = useRef("");
  const date = useRef("");
  const invitedBy = useRef("");
  const cell = useRef("");
  const address = useRef("");
  const hasDoneWaterBaptism = useRef("");

  const history = useHistory();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title.current.value,
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      birthDate: birthDate.current.value,
      phoneNumber: phoneNumber.current.value,
      email: email.current.value,
      date: date.current.value,
      invitedBy: invitedBy.current.value,
      cell: cell.current.value,
      address: address.current.value,
      hasDoneWaterBaptism: hasDoneWaterBaptism.current.value,
    };

    //add a document to a firebase document
    try {
      await projectFirestore.collection("member").add(doc);
    } catch (err) {
      console.log(err);
    }

    // resetForm();

    history.push('/members')
  };

  
  const resetForm = () => {
    title.current.value = "";
    firstName.current.value = "";
    middleName.current.value = "";
    lastName.current.value = "";
    birthDate.current.value = "";
    phoneNumber.current.value = "";
    email.current.value = "";
    date.current.value = "";
    invitedBy.current.value = "";
    cell.current.value = "";
    address.current.value = "";
    hasDoneWaterBaptism.current.value = "";
  };


  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <div className="member-detail">
          <label>
            <span>Title</span>
            <input type="text" ref={title} placeholder="Brother/Sister" />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>First name</span>
            <input type="text" ref={firstName} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Middle name</span>
            <input type="text" ref={middleName} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Last name</span>
            <input type="text" ref={lastName} required />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Birth date</span>
            <input
              placeholder="day/month/year"
              type="text"
              ref={birthDate}
              required
            />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Phone number</span>
            <input type="text" ref={phoneNumber} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Email</span>
            <input type="email" ref={email} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Date joined</span>
            <input placeholder="day/month/year" type="text" ref={date} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>cell</span>
            <input type="text" ref={cell} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Home address </span>
            <input type="text" ref={address} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Have you done water Baptism </span>
            <input
              placeholder="yes/no"
              type="text"
              ref={hasDoneWaterBaptism}
              required
            />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Invited by</span>
            <input type="text" ref={invitedBy} required />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
