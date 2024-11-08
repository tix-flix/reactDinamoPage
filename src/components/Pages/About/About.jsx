import React, { useEffect, useState } from 'react'
import Title1 from '../../UI/Title1/Title1'
import List2 from '../../List2/List2'

function About() {
  const [vill, setVill] = useState([])
  useEffect( () => {
    fetch("/villages.json")
    .then(response => response.json())
    .then(data => {
      setVill(data.villages)
    })
  },[]) 
  return (
    <>
    <Title1 text="Деревни мира ниндзя" color="rgb(251,228,7)"/>
    <List2 mass={vill}/>
    </>
  )
}

export default About