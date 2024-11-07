import React from 'react'
import st from './Buttons.module.css'

function Buttons(color, bgcolor, size, br, onClick, text) {
    let styles = {
        color: color,
        backgroundColor: bgcolor,
        fontSize: size,
        borderRadius: br
    }
  return (
    <button style={styles} className={st.btn} onClick={onClick}>{text}</button>
  )
}

export default Buttons