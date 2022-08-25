import React from 'react'

const NotFound = () => {
  return (
    <div className='row w-25 mx-auto p-5 mt-5 d-flex flex-column'>
        <div className='col  pt-5 pb-2 text-center mt-5'>
           <h1 className='display-1 text-danger'>404</h1>
        </div>
        <div className='col text-center  pt-2 pb-2'>
         <h6 className='text-white'>Page Not Found !</h6>
        </div>
    </div>
  )
}

export default NotFound;