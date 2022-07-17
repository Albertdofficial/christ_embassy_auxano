import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "./config";

export default function MemberDetails({ data }) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  //console.log(id);

  // get a document from firebase
  useEffect(() => {
    setIsPending(true);
    try {
      projectFirestore
        .collection("member")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setPerson(doc.data());
          } else {
            throw new Error("Page not found");
          }
          setIsPending(false);
        });
    } catch (err) {
      setIsPending(false);
      setError("Page not Found");
      console.log(err.message);
    }
  }, [id]);

  return (
    <div>
      {error && <p>{error} </p>}
      {isPending && <div>Loading...</div>}
      {person && <p> {person.body} </p>}
    </div>
  );
}
