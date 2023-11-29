import React from 'react'

interface ColorsProps {
    colors: number[]
}

const ColorСircle = ({ colors }: ColorsProps) => {


  return (
    <div className="w-[80px] h-[80px] rounded-full" style={{background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`}}></div>
  )
}

export default ColorСircle