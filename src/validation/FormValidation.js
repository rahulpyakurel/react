import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormValidation = () => {
  return (
    <>
    <Formik
    initialValues={{firstname:'', lastname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .max(20,'Must be 20 characters or less')
        .required('Firstname is Mandatory'),

        lastname:Yup.string()
        .max(20,'Must be 20 characters or less')
        .required('Lastname is Mandatory'),

        email:Yup.string()
        .email('Invalid email format include @ and .')
        .required('Email is Mandatory'),

        password:Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&?!])[A-Za-z\d@#$&?!]{8,}$/,
        "weak password must include uppercase,lowercase,digit and special character and minimum of 8 characters"
        )
        .required('Password is mandatory'),

        cpassword:Yup.string()
            .required('Confirm Password is Mandatory')
            .oneOf([Yup.ref('password'),null],'passwords do not match')

    })}
    >
        <div className='row d-flex justify-content-center'>
            <div className='col-md-6 p-3 mt-4 shadow-lg'>
                <Form>
                    <div className='mb-3'>
                        <label htmlFor='firstname'>FirstName</label>
                        <Field type='text' name='firstname' className='form-control'/>
                        <ErrorMessage name='firstname'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastname'>LastName</label>
                        <Field type='text' name='lastname' className='form-control'/>
                        <ErrorMessage name='lastname'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' className='form-control'/>
                        <ErrorMessage name='email'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' name='password' className='form-control'/>
                        <ErrorMessage name='password'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type='password' name='cpassword' className='form-control'/>
                        <ErrorMessage name='cpassword'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary'>Register</button>
                    </div>
                </Form>
            </div>
        </div>
    </Formik>
    </>
  )
}

export default FormValidation