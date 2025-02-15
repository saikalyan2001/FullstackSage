import React from 'react'

const CustomSignUpBtn2 = ({data, label}) => {

  const buttonLabel = data ? data.btnLabel : label;

  return (
    <div className='absolute  left-0 right-0 bottom-4'>
        <button className={`${data && data.btnLabel ? "bg-green-600 text-white hover:bg-green-500" : "bg-gray-200 text-gray-400 font-medium" }  w-[100%] p-2 rounded-xl`}>
            {buttonLabel}
        </button>
    </div>
  )
}

export default CustomSignUpBtn2