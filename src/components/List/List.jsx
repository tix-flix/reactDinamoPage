import React from 'react'
import st from './List.module.css'
import Title2 from '../UI/Title2/Title2'
import Title3 from '../UI/Title3/Title3'
import Title1 from '../UI/Title1/Title1'
import ImageCont from '../UI/ImageCont/ImageCont'

function List({arr}) {
  return (
    <>
    <center>
        <ul className={st.list}>
          {
          arr.map((e,i) => (
          <li className={st.list__item} key={e.id}>
            <div className={st.cont}>
              <ImageCont wid="280px" hei="390px" br="10px" link={e.image}/>
              <Title1 text={e.name}/>
              <Title2 text={e.movie}/>
              <Title3 text={e.prof}/>
            </div>
          </li>
          ))
         }
        </ul>
    </center>
    </>
  )
}

export default List