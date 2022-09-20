import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/main1"}>Main 1</Link></li>
            <li><Link to={"/main2"}>Main 2</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
