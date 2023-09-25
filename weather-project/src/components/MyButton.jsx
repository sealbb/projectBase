import React from 'react'

function MyButton({count,onClick}) {
  return (
    <button className='border border-black' onClick={onClick}>{ count }</button>
  )
}

export default MyButton