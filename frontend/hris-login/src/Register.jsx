import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
       
    })

    const navigate = useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/register',values)
        .then (res=>{
            if(res.data.Status === "Success"){
                navigate('/login')
            }else{
                alert("Error navigation")
            }
        })
        .then(err =>console.log(err));
    }

    return (
        <div className='flex justify-center items-center h-screen bg-[#1e1e1e]'>
            <div className='w-96 p-6  '>
                <h1 className='mb-4 text-white text-3xl block text-center font-bold'>HRIS</h1>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <input type='text' id='username' onChange={e => setValues({ ...values, name: e.target.value })} className='rounded-lg mb-4 border w-full text-base px-2 py-1 bg-[#1e1e1e] text-white' placeholder='Username'></input>
                    </div>
                    <div>
                        <input type='text' id='email' onChange={e => setValues({ ...values, email: e.target.value })} className='rounded-lg mb-4 border w-full text-base px-2 py-1 bg-[#1e1e1e] text-white' placeholder='Email'></input>
                    </div>
                    <div>
                        <input type='password' id='password' onChange={e => setValues({ ...values, password: e.target.value })} className='rounded-lg mb-4 border w-full text-base px-2 py-1 bg-[#1e1e1e] text-white' placeholder='Password'></input>
                    </div>
                    <div>
                        <input type='password' id='confirmPassword' onChange={e => setValues({ ...values, cpassword: e.target.value })} className='rounded-lg border w-full text-base px-2 py-1 bg-[#1e1e1e] text-white' placeholder='Confirm Password'></input>
                    </div>

                    <div className='mt-5'>
                        <button type='submit' className='flex justify-center items-center mx-auto rounded-md text-white bg-[#80BFF9] py-2 px-9 text-black'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register