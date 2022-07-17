import React from "react";

import './About.css'

export default function About() {
  return (
    <div className="about text-2xl  min-h-screen md:px-8 pt-4 max-w-4xl">
      <div className="vision mx-4">
        <h1>Our Vision</h1>
        <p>
          {" "}
          To take the divine presence of God to the nations and peoples of the
          world and demonstrate the character of the spirit.
        </p>
      </div>

      <div className="mission pt-10 mx-4">
        <h1>Our Mission</h1>
        <p>
          To raise generations of men and women who will come into their
          inheritance to fulfill God’s dream.
        </p>
      </div>

      <div className="purpose pt-10 mx-4">
        <h1>Our purpose</h1>
        <p> To make known and bring them into their inheritance.</p>
      </div>
    </div>
  );
}
