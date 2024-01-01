import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',

    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/Login', values)
            .then(res => {
                if (res.data.Status === "Success") {
                   
                    navigate('/')

                } else {
                    alert(res.data.Error);
                    
                }
            })
            .then(err => console.log(err));
    }

    return (
        <div className='flex justify-center items-center h-screen bg-[#1e1e1e]'>
            <div className='w-96 p-6  '>
                <h1 className='mb-4 text-white text-3xl block text-center font-bold'>HRIS</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text' id='email' onChange={e => setValues({ ...values, email: e.target.value })} className='rounded-lg mb-4 border w-full text-base px-2 py-1 bg-[#1e1e1e] text-white' placeholder='Username'></input>
                    </div>
                    <div>
                        <input type='password' id='password' onChange={e => setValues({ ...values, password: e.target.value })} className='rounded-lg border w-full text-base px-2 py-1 bg-[#1e1e1e] text-white' placeholder='Password'></input>
                    </div>
                    <div className='mt-3 flex justify-between items-center'>
                        <div>
                            <a href='#' className='text-white'>Forgot password</a>
                        </div>
                        <div>
                            <Link to='/register' href='#' className='text-white'>Sign up</Link>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='flex justify-center items-center mx-auto rounded-md text-white bg-[#80BFF9] py-2 px-9 text-black'>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login