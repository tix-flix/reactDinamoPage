import React from 'react'
import st from './List.module.css'
import Title2 from '../UI/Title2/Title2'
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
              <ImageCont link={e.images} wei="200px" hei="300px" br="15px"/>
              <Title1 text={e.name}/>
              <Title2 text={e.personal.sex}/>
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