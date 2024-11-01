import React from 'react'
import st from "./NavLinkCustom.module.css"
import { NavLink } from 'react-router-dom'

function NavLinkCustom({add, text}) {
  return (
    <NavLink to={add} style={({isActive}) => ({color: isActive ? "black" : "white"}) } className={st.link}>{text}</NavLink>
  )
}

export default NavLinkCustom