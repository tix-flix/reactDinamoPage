import React, { useEffect, useState } from 'react'
import List from '../../List/List';


function PageThree() {
    const [dota, setDota] = useState([]);

  useEffect(() => {
    fetch("https://narutodb.xyz/api/village/search?name=Kirigakure")
      .then((response) => response.json())
      .then((data) => {
        setDota(data.characters);
      });
  }, []);

  return (
    <>
    <List arr={dota}/>
    </>
  )
}

export default PageThree