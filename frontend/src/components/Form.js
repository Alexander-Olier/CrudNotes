import React, { useState } from "react";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const data = { title, description };

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const postNotes = () => {
    fetch("http://localhost:5000/api/note/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={onTitleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={onDescriptionChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
