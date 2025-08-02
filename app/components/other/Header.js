import React from 'react'

const Header = (props) => {
  return (
    <>
        <div className="w-full bg-gray-800 flex flex-col items-center justify-center mt-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">{props.pageName}</h1>
            <p className='text-white'>{props.pageAbout}</p>
        </div>
    </>
  )
}

export default Header