import React, { useContext, useEffect, useState } from 'react';
import {
    Navigate, Link
} from 'react-router-dom';
import {
    RegistrationContext
} from '../contexts/RegistrationContext';

 const Users = () => {
    const {
        id,
        isAuth
    } = useContext(RegistrationContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://localhost:8000/users/", {
            headers: {
                "Auth": id
            }
        })
        .then((response) => response.json())
        .then(data => setUsers(data.data));
    }, []);

    if(!isAuth) {
        return <div>
            You're not authenticated. 
            <Link to="/one">Please Checck</Link>
        </div>
    }
    return (
    <div>
        <h1>I'm in Users page</h1>
        {
            users.map(user => (<div style={{border: '1 px solid red'}}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.dob}</p>
                <Link to={`/users/${user.id}`}>More details...</Link>
            </div>))
        }
    </div>);
}
export default Users