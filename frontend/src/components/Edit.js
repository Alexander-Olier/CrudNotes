import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Edit() {
  const { _id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [object, setObjetct] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

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
      .then((res) => res)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNotesOne();
  },[]);

  const getNotesOne = async () => {
    fetch(`http://localhost:5000/api/note/noteOne/${_id}`)
      .then((response) => response.json())
      .then((data) => setObjetct(data));

    setTitle(object.title);
    setDescription(object.description);
  };

  return (
    <div>
      <div>
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

          <button type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
