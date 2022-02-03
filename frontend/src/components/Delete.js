import React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function Delete() {
  const { _id } = useParams();
const {navigate}= useNavigate();

  return <div>{navigate("/list")} </div>;
}
