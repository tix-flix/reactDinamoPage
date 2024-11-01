import React from 'react'
import st from './ImageCont.module.css'

function ImageCont({link, wid, hei, br}) {
    let styles = {
        backgroundImage: `url(${link})`,
        width: wid,
        height: hei,
        borderRadius: br
    }
  return (
    <div className={st.box} style={styles}></div>
  )
}

export default ImageCont