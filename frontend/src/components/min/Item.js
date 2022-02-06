import React, {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Item(props) {
  //menuItem
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //direccionar
  const navigate = useNavigate();
  let location = useLocation();

  const nav = () => {
    window.location.replace("");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteNotes = () => {
    navigate("/");

    const Methods = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch(`http://localhost:5000/api/note/delete/${props._id}`, Methods)
      .then(nav())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <div className="submenu">
        <Menu
          id={`basic-menu`}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link
            to={{
              pathname: `/edit/${props._id}`,
              state: { background: location },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              Edit
            </MenuItem>
          </Link>

          <MenuItem onClick={deleteNotes}>Eliminar</MenuItem>

        </Menu>
        <button onClick={handleClick}>
          <ExpandMoreIcon />
        </button>
      </div>
    </div>
  );
}
