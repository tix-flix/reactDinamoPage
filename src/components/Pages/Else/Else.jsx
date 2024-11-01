import React from 'react'
import Image from '../../UI/Image/Image'
import Title1 from '../../UI/Title1/Title1'
import st from './Else.module.css'

function Else() {
  return (
    <div className={st.cont}>
        <div>
            <Image width="350px" br="15px" link="https://pm1.aminoapps.com/6822/c04e5b742f8df0c9a77ad8adec766cbe0c6b4719v2_hq.jpg"/>
            <Title1 text="404, Not Found"/>
        </div>
    </div>
  )
}

export default Else