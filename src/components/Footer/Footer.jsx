import React from 'react'
import Title3 from '../UI/Title3/Title3'
import st from './Footer.module.css'

function Footer() {
  return (
    <div className={st.cont}>
        <Title3 color="black" text="Аниме — это искусство, но и искусство может быть опасным."/>
        <Title3 color="black" text="© 2024 Anime, Nazis & Gosling. Все права защищены."/>
        <Title3 color="black" text="Связаться с нами:"/>
    </div>
  )
}

export default Footer