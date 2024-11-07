import React from 'react'
import Title1 from '../../UI/Title1/Title1'
import st from './Else.module.css'
import ImageCont from '../../UI/ImageCont/ImageCont'

function Else() {
  return (
    <div className={st.cont}>
        <div>
            <ImageCont wid="450px" hei="350px" br="15px" link="https://media1.tenor.com/m/OoUBROH_iY0AAAAd/naruto-pain.gif"/>
            <Title1 text="404 Not Found"/>
        </div>
    </div>
  )
}

export default Else