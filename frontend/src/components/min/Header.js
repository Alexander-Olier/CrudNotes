import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="cntHeader">
          <ul>
              <li> <Link to='/add'> Add </Link></li>
              <li><Link to='/'>List</Link></li>
          </ul>
      </div>
    </div>
  );
}
