import React from 'react'

const SignUp = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input
            type='text'
            name='ownername'
            id='ownername'
            placeholder='Owner Name'
            required
          /> 
           <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
            />
          <input
              type='text'
              name='storename'
              id='storename'
              placeholder='Local Store Name'
              required
            /> 
             <input
              type='id'
              name='storid'
              id='storeid'
              placeholder='Local Store Id'
              required
            /> 
          <input
          type='text'
          name='location'
          id='location'
          placeholder='Location'
          required
        /> 
        <input
        type='text'
        name='companyname'
        id='companyname'
        placeholder='Company Associated With'
        required
      />
            <input
              type='tel'
              name='phnno'
              id='phnno'
              placeholder='Your Phone Number'
              pattern='[0-9] {3} - [0-9] {2} - [0-9] {3}'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Choose your password'
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm your password'
            />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
