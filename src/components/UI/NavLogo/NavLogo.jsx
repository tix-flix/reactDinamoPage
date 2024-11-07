import React from 'react'

function NavLogo({link, width, text, br, add}) {
  return (
    <a href={add}>
      <img style={{width: width, borderRadius: br}} src={link} alt={text} />
    </a>
  )
}

export default NavLogo