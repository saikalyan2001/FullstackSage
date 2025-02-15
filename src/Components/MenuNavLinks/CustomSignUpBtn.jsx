import React from 'react'

const CustomSignUpBtn = ({data, label}) => {

  const buttonLabel = data ? data.btnLabel : label;

  return (
    <div className='mx-4 absolute  left-0 right-0 bottom-4'>
        <button className="bg-green-700 text-white hover:bg-green-600 w-[100%] p-2 rounded-xl" >
            {buttonLabel}
        </button>
    </div>
  )
}

export default CustomSignUpBtn