import React from 'react'
import st from './Title1.module.css'

function Title1({text, color, size}) {
  return (
    <h1 className={st.title} style={{color: color, fontSize: size}}>{text}</h1>
  )
}

export default Title1