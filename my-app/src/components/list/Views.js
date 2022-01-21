import React, { useEffect, useState } from "react";

function Views() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(true);
          console.log(result);
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
      <ul>
        {items.map(item => (
          <li >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}
export default Views