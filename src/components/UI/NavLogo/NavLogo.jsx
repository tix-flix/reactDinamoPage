import React from 'react'

function NavLogo({link, width, text, br}) {
  return (
    <img style={{width: width, borderRadius: br}} src={link} alt={text} />
  )
}

export default NavLogo