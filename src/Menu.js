import React from 'react'
import { Link, NavLink} from "react-router-dom";

function Menu() {
  return (
    <div>
      <NavLink exact  className='active' to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Product">Product</NavLink>
      {/* <Link to={user.id}>{user.name}</Link> */}
    </div>
  )
}

export default Menu
