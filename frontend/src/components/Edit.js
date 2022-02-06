import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";

//Material ui
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Edit() {
  const { _id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  //modal
  const [modalVisible, setModalVisible] = useState(
    location.pathname === `/edit/${_id}`
  );

  const putNotes = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/note/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then((res) => {
        navigate("/");
        back();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/note/noteOne/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);

  let back = (e) => {
    e.stopPropagation();
    setModalVisible(!modalVisible);
  };
  return (
    <div className="container">
      <div className="contForm">
        <form onSubmit={putNotes}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={onTitleChange}
          />

          <textarea
          rows={5}
            type="text"
            name="description"
            placeholder="description"
            className="textAr"
            value={description}
            onChange={onDescriptionChange}
          />

          <input type="submit" value="Editar" />
        </form>
      </div>
    </div>
  );
}
