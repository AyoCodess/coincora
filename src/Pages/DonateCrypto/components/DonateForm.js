import React from 'react';

function DonateForm({ ticker }) {
  return (
    <div className='flex flex-col items-center mx-auto mt-5'>
      <p className='font-bold text-xl w-[300px] md:w-[400px]  px-1 text-center mb-5 text-appBlue'>
        Send crypto to our <span className='text-gray-500'>{ticker}</span>{' '}
        <b>address</b> and then click submit, or click cancel. Thank you.
      </p>
      <h2 className='font-bold text-center text-lg px-5'>
        Share your details (optional)
      </h2>
      <div className='p-5 flex flex-col sm:flex-row gap-4 items-center justify-center'>
        <input
          type='text'
          name='entry.945193122'
          className='  w-40 md:w-48  h-10  text-sm rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
          placeholder='Your Name'
        />
        <input
          type='email'
          name='entry.892215861'
          className='  w-40 md:w-48 h-10   text-sm rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
          placeholder='Your email'
        />
      </div>
    </div>
  );
}

export default DonateForm;
