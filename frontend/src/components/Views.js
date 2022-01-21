import React, { useEffect, useState } from "react";

export default function Views() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/note")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then((jsonRes) => setNotes(jsonRes.notes));
  }, []);
  console.log(notes)

  return (
    <ul>
      {!!notes && notes.map(item => {
        return (
          <li key={item._id}>
            {item.description} 
          </li>
        );
      })}
    </ul>
  );
}
