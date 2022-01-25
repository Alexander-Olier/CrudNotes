import React from "react";
import { useParams } from "react-router";

export default function Delete() {
  const { _id } = useParams();

  const Methods = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(`http://localhost:5000/api/note/delete/${_id}`, Methods)
    .then((response) => console.log(response, ' eliminado'))
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return <div>Eliminado {_id} </div>;
}
