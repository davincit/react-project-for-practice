import React from 'react'

const getStyle = (v)=>{
    const cls ={
        '=': 'equals',
        '+': 'opt',
        '-': 'opt',
        '/': 'opt',
        'x': 'opt',
    }

    
    return cls[v]
}
const Button = ({ value }) => {
  return <button className={ `${getStyle(value)} button`}>{value}</button>
}

export default Button
