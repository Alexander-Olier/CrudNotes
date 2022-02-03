import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Item from "./min/Item";

export default function Views() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/note")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes.notes));
  }, []);

  return (
    <div className="container">
      <StackGrid columnWidth={350} duration={100}>
        {!!notes &&
          notes.map((item) => {
            return (
              <div key={item._id} className="box">
                <div className="text">
                  <div className="title">
                    <h2>{item.title}</h2>
                    <Item _id={item._id}></Item>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
      </StackGrid>
    </div>
  );
}
