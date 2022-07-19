import React from "react";

import { projectFirestore } from "./config";
import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Members from "./Members";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Signup from "./Signup";
import About from "./About";
import Home from "../Home";
import MemberDetails from "./MemeberDetails";

import "../App.css";
import Birthday from "../Birthday";

export default function App() {
  const [data, setData] = useState(null);
  // const [error, setError] = useState('')

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

  // get data from firebase
  useEffect(() => {
    const unsub = projectFirestore
      .collection("member")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          console.log("No recipes to load");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
        }
      }, (err) => {
        console.log(err.message);
      })

      return () => unsub()
      
  }, []);

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

    resetForm();
  };

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/signup">
            <Signup
              handleSubmit={handleSubmit}
              title={title}
              firstName={firstName}
              middleName={middleName}
              birthDate={birthDate}
              lastName={lastName}
              phoneNumber={phoneNumber}
              email={email}
              date={date}
              invitedBy={invitedBy}
              cell={cell}
              address={address}
              hasDoneWaterBaptism={hasDoneWaterBaptism}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/birthdays">
            <Birthday data={data} />
          </Route>
          <Route path="/members">
            <Members data={data} />
          </Route>
          <Route path="/memberdetails/:id">
            <MemberDetails data={data} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
