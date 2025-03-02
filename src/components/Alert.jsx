import React from 'react'

const Alert = (props) => {
  return (
    props.alert && 
    
    <div className={`${props.mode ?"bg-slate-800 text-white":"bg-yellow-300 text-black"} transform  w-full  flex items-center justify-center`}>
      <span className='shadow-2xl text-2xl mx-[5vw]  '>! {props.alert.msg}</span>
    </div>
  )
}

export default Alert
