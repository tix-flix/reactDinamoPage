import React from 'react'
import Title1 from '../../UI/Title1/Title1'
import Media from '../../UI/Media/Media'
import Title2 from '../../UI/Title2/Title2'
import st from './Main.module.css'
import ImageCont from '../../UI/ImageCont/ImageCont'

function Main() {
  return (
    <>
    <Title1 text="Anime, Нацизм и Райан Гослинг" color="rgb(180, 3, 3)"/>
    <div className={st.cont}>
    <Media/>
    <div className={st.cont2}>
    <Title2 color="rgb(175, 27, 175" size="25px" text="От мультипликации к мрачным истинам: Нацисты в аниме и их влияние на популярную культуру"/>
    </div>
    </div>
    <Title1 text="Пусть Он просто будет" color="violet"/>
    <div className={st.cont}>
    <ImageCont wid="30%" hei="400px" link="https://media1.tenor.com/m/hc3lkbgo0DIAAAAd/%D1%80%D0%B0%D0%B9%D0%B0%D0%BD-%D0%B3%D0%BE%D1%81%D0%BB%D0%B8%D0%BD%D0%B3-%D0%B1%D0%B5%D0%B3%D1%83%D1%89%D0%B8%D0%B9-%D0%BF%D0%BE-%D0%BB%D0%B5%D0%B7%D0%B2%D0%B8%D1%8E.gif" />
    <ImageCont wid="30%" hei="400px" link="https://media1.tenor.com/m/8rXFAsQHtTUAAAAC/%D1%80%D0%B0%D0%B9%D0%B0%D0%BD-%D0%B3%D0%BE%D1%81%D0%BB%D0%B8%D0%BD%D0%B3-ryan-gosling.gif"/>
    <ImageCont wid="30%" hei="400px" link="https://media1.tenor.com/m/5JDI6oX56BAAAAAC/gosling-rayan-gosling.gif"/>
    </div>
    </>
  )
}

export default Main