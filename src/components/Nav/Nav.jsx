import React from 'react'
import st from './Nav.module.css'
import NavLogo from '../UI/NavLogo/NavLogo'
import NavLinkCustom from '../UI/NavLink/NavLinkCustom'
import {Routes, Route} from 'react-router-dom'

function Nav() {
  return (
      <div className={st.cont}>
        <div className={st.nav__logo}>
          <NavLogo link="https://www.graycell.ru/picture/big/svastika.jpg" width="50px" br="50%"/>
        </div>
        <ul className={st.list}>
          <li className={st.list__link}>
            <NavLinkCustom add='/' text="MAIN" />
          </li>
          <li className={st.list__link}>
            <NavLinkCustom add='/home' text="HOME"/>
          </li>
          <li className={st.list__link}>
            <NavLinkCustom add='/about' text="ABOUT"/>
          </li>
        </ul>
      </div>
  )
}

export default Nav