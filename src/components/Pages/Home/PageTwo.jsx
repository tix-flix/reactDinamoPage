import React, { useEffect, useState } from 'react'
import List from '../../List/List';


function PageTwo() {
    const [dota, setDota] = useState([]);

  useEffect(() => {
    fetch("https://narutodb.xyz/api/village/search?name=Sunagakure")
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

export default PageTwo