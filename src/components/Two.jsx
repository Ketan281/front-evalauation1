import React, { useState, useContext } from 'react';
import {
    RegistrationContext
} from '../contexts/RegistrationContext';
import { useNavigate } from 'react-router-dom'
import {
     Link
} from 'react-router-dom';

import styles from "./Form.module.css"
const Two = () => {
    const navigate = useNavigate()
    const {
        id,
        isAuth
    } = useContext(RegistrationContext);

    const {
        register,
    } = useContext(RegistrationContext);

    const [userDetails, setUserDetails] = useState({
        state: '',
        address: '',
        pin:''
    });
    const handleChange = (event) => {
        const {
            name,
            value
        } = event.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userDetails.email !== '' && userDetails.password !== '') {
            fetch('http://localhost:8000/users/', {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                register(data.id);
            });
            navigate("/users")
        } else {
            alert('Invalid');
        }
    };



    if(!isAuth) {
        return <div>
            You're not authenticated. 
            <Link to="/One">Please fill all the fields of first page</Link>
        navigate
        </div>
    }

  return (
    <div>
        
        
        <form onSubmit={handleSubmit}>
      <h1>Second Registration</h1>
      <input
        name="state"
        type="text"
        placeholder="Enter State of residence"
        value={userDetails.state}
        onChange={handleChange}
        className={styles.inputField}
      />
      <br />
      <input
        name="address"
        type="text"
        placeholder="Enteer Address"
        value={userDetails.address}
        onChange={handleChange}
        className={styles.inputField}
      />
      <br/>
     <input
        name="pin"
        type="text"
        placeholder="pin"
        value={userDetails.pin}
        onChange={handleChange}
        className={styles.inputField}
      />
      <br />
      <input type="submit" value="REGISTER" disabled={userDetails.email === '' || userDetails.password === ''}/>
      </form>

    </div>
  )
}

export default Two