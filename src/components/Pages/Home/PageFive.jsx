import React, { useEffect, useState } from 'react'
import List from '../../List/List';


function PageFive() {
    const [dota, setDota] = useState([]);

  useEffect(() => {
    fetch("https://narutodb.xyz/api/village/search?name=Kumogakure")
      .then((response) => response.json())
      .then((data) => {
        setDota(data.characters);
        console.log(data)
      });
  }, []);

  return (
    <>
    <List arr={dota}/>
    </>
  )
}

export default PageFive