import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  const [auth,setAuth] = useState(false);
const[message, setMessage] = useState('')
const [name, setName] = useState('')


const navigate = useNavigate()
axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:8081')
.then (res=>{
    if(res.data.Status === "Success"){
        setAuth(true)
        setName(res.data.name)
      
    }else{
      setAuth(false)
      setMessage(res.data.Error)
    }
})
.then(err =>console.log(err));
  }, [])

  const handleDelete = () => {
    axios.get('http://localhost:8081/logout')
      .then(res => {
        if (res.data.Status === 'Success') {
          // Update the state to reflect logged-out state
          setAuth(false);
          // Optionally redirect the user to another page
          navigate('/login');
        } else {
          // Handle logout failure, display an error message, etc.
          console.log('Logout failed:', res.data.Error);
        }
      })
      .catch(err => console.log(err));
  };
  


  return (
    <div>
      {
        auth ?
        <div>
          <h3>you are authorized --- {name}</h3>
          <button onClick={handleDelete}>Logout</button>
        </div>
        :
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <Link to="/login">Login</Link>
          </div>
      
     }
    </div>
  )
}

export default Home

