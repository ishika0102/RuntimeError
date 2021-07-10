import React from 'react'

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='tel'
              name='phnno'
              id='phnno'
              placeholder='Your Phone Number'
              required
            />
            <input 
            type='no' 
            name='password' 
            id='password'
            placeholder='Your otp'
            required/>
            <button type='submit'>Log In </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
