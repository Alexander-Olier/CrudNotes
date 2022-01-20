import React, { useEffect, useState, Fragment } from "react";

export default function Views() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/note")
      .then((res) => res.json())
      .then(
        (result) => {
        
          setLoading(true);
          console.log(result)
          setItems(result);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoading) {
    return <div>Loadding...</div>;
  } else {
    return (
      <div>

        {items.map((item) => (
          <li key={item._id}>{item}</li>
        ))}
      </div>
    );
  }
}
