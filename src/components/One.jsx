import React, { useState, useContext } from 'react';
import {
    RegistrationContext
} from '../contexts/RegistrationContext';
import { useNavigate } from 'react-router-dom';
import styles from "./Form.module.css"
const One = () => {
       
const navigate = useNavigate()
    const {
        register,
    } = useContext(RegistrationContext);

    const [userDetails, setUserDetails] = useState({
        name: '',
        age: '',
        dob:''
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
            navigate("/two");
        } else {
            alert('Invalid');
        }
    };



  return (
    <div className={styles.MainCard}>
        
        
        <form onSubmit={handleSubmit}>
      <h1>First Registration</h1>
      <input
        name="name"
        type="text"
        placeholder="Enter Name"
        value={userDetails.name}
        onChange={handleChange}
        className={styles.inputField}
      />
      <br />
      <input
        name="age"
        type="text"
        placeholder="Enter age"
        value={userDetails.age}
        onChange={handleChange}
        className={styles.inputField}
      />
      <br/>
     <input
        name="dob"
        type="text"
        placeholder="Date Of Birth"
        value={userDetails.dob}
        onChange={handleChange}
        className={styles.inputField}
      />
      <br />
      <input type="submit" value="NEXT" disabled={userDetails.email === '' || userDetails.password === ''}/>
      </form>

    </div>
  )
}

export default One