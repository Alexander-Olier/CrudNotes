import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";



export default function Edit() {
  const { _id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  //modal


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
      .then((res) => navigate("/list"))
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
    navigate(-1);
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
        }}
      >
        <div className="contForm">
          <form onSubmit={putNotes}>
            <label>title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onTitleChange}
            />

            <label>Description: </label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={onDescriptionChange}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
