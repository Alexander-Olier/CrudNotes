import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const data = { title, description };
  const navigate = useNavigate();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const postNotes = () => {
    fetch("http://localhost:5000/api/note/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    postNotes();
    navigate('/')
  };
  return (
    <div className="container">
      <div className="contForm">
        <form onSubmit={handleSubmit}>
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

          <input type="submit" value="Agregar" />
        </form>
      </div>
    </div>
  );
}
