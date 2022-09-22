import React from 'react'
import Test from './Test'

const SecondComponent = () => {
  return (
    <>
        <Test/>
        <div className='container'>
            <div className='row -d-flex justify-content-center'>
                <div className='col-md-6 shadow-lg p-3'>
                    <form>
                        <div className='mb-3'>
                        <label htmlFor='fullname'>FullName</label>
                        <input type='text' id='fullname' placeholder='Your name ' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' placeholder='Your email ' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Your password ' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-primary'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondComponent