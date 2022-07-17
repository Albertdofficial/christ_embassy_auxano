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
import Search from "./Search";

export default function App() {
  const [data, setData] = useState(null);
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const title = useRef("");
  const birthDate = useRef("");
  const phoneNumber = useRef("");
  const email = useRef("");
  const date = useRef("");
  const invitedBy = useRef("");

  // get data from firebase
  useEffect(() => {
    projectFirestore
      .collection("member")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No recipes to load");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    };

    //add a document to a firebase document
    try {
      await projectFirestore.collection("member").add(doc);
    } catch (err) {
      console.log(err);
    }

    // resetForm();

    console.log(doc);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
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
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/members">
            <Members data={data} />
          </Route>
          <Route path="/memberdetails/:id">
            <MemberDetails data={data} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
