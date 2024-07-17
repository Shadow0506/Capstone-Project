import React, { forwardRef, useId } from 'react'

const Input = forwardRef(({
    // label,
    type = 'text',
    className = '',
    placeholder='',
    ...props
}, ref) => {
    const id = useId()
  return (
    <div className={`${className}`}>
      {/* <label htmlFor={id} className='text-white'>{label}</label> */}
      <input
      className='py-1.5 px-2 rounded-lg m-4 text-black'
      id={id}
      placeholder={placeholder}
      type={type}
      ref={ref}
      {...props}/>
    </div>
  )
})

export default Input
