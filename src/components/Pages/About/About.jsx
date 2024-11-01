import React, {useState, useEffect } from 'react'
import List from '../../List/List'

function About() {
    const [mass, setMass] = useState([]);

  useEffect(() => {
    fetch("/RayanGosling.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setMass(data)
    })
  },[]);
  return (
    <>
    <List arr={mass}/>
    </>
  )
}

export default About