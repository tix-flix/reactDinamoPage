import React from 'react'
import Title1 from '../../UI/Title1/Title1'
import NavLinkCustom from '../../UI/NavLink/NavLinkCustom'
import { Outlet } from 'react-router-dom'
import st from './Home.module.css'

function Home() {
  return (
    <>
    <Title1 text="Деревни Ниндзя" color="rgb(251,228,7)"/>
    <div className={st.cont}>
      <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/home/PageOne' text="Деревня Листа"/>
      <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/home/PageTwo' text="Деревня Песка"/>
      <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/home/PageThree' text="Деревня Тумана"/>
      <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/home/PageFour' text="Деревня Камня"/>
      <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/home/PageFive' text="Деревня Облако"/>
    </div>
    <div className={st.bor}>
    <Outlet/>
    </div>
    </>
  )
}

export default Home