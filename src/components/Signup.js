import React from "react";
import { useHistory } from "react-router-dom";

import "./Signup.css";


export default function Signup({
  handleSubmit,
  title,
  firstName,
  middleName,
  lastName,
  phoneNumber,
  birthDate,
  email,
  date,
  cell,
  address,
  hasDoneWaterBaptism,
  invitedBy
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/members");
  }
 
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
            <input placeholder="day/month/year" type="text" ref={birthDate} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Phone number</span>
            <input type="text" ref={phoneNumber} required/>
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
            <input type="text" ref={cell} required/>
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Home address </span>
            <input type="text" ref={address} required/>
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Have you done water Baptism </span>
            <input placeholder="yes/no" type="text" ref={hasDoneWaterBaptism} required/>
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Invited by</span>
            <input type="text" ref={invitedBy} required/>
          </label>
        </div>

        <button onClick={handleClick} >Submit</button>
      </form>
    </div>
  );
}
