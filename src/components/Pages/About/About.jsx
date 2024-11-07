import React, { useState } from 'react'
import Title1 from '../../UI/Title1/Title1';
import Title2 from '../../UI/Title2/Title2';
import st from './About.module.css'
import NavLinkCustom from '../../UI/NavLink/NavLinkCustom';
import ImageCont from '../../UI/ImageCont/ImageCont';
import { Outlet } from 'react-router-dom';

function About() {
  const [info, setInfo] = useState()
  const villageData = {
    Konoha: {
      description: 'Деревня скрытого листа. Основана Хаширамой Сенджу.',
      image: '/Image/list.jpeg',
    },
    Suna: {
      description: 'Деревня скрытого песка. Знаменита техникой песка.',
      image: '/Image/pesok.webp',
    },
    Kiri: {
      description: 'Деревня скрытого тумана. Имеет тайны убийства.',
      image: '/Image/tuman.webp',
    },
    Kumo: {
      description: 'Деревня скрытого облака. Известна своей силой.',
      image: '/Image/oblako.jpeg',
    },
    Iwa: {
      description: 'Деревня скрытого камня. Одна из самых мощных.',
      image: '/Image/kamna.webp',
    },
  }
  const handleClick = (village) => {
    setInfo(villageData[village]);
  };

  return (
    <>
    
      <Title1 color="rgb(251,228,7)" text="Деревни мира Наруто"/>
      <div className={st.cont}>

      <ul className={st.list}>
        <li className={st.lit}><NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} onClick={() => handleClick('Konoha')} text="Коноха"/></li>
        <li className={st.lit}><NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} onClick={() => handleClick('Suna')} text="Суна"/></li>
        <li className={st.lit}><NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} onClick={() => handleClick('Kiri')} text="Кири"/></li>
        <li className={st.lit}><NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} onClick={() => handleClick('Kumo')} text="Кумо"/></li>
        <li className={st.lit}><NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} onClick={() => handleClick('Iwa')} text="Ива"/></li>
      </ul>
    <Outlet/>
      {info && (
        <div className={st.bor}>
          <ImageCont link={info.image} wid="650px" hei="380px" br="15px"/>
          <Title2 color="rgb(251,228,7)" text={info.description}/>
        </div>
      )}
      </div>
      
    </>
  )
}

export default About