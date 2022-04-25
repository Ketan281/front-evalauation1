import React, { useEffect, useState } from 'react';
import {
    useParams
} from 'react-router-dom';

export const UsersDetails = () => {
    const {
        userId
    } = useParams();
    const [userState, setUserState] = useState({});
    console.log(userId);
    useEffect(() => {
        fetch(`https://localhost:8000/users/${userId}`)
        .then((response) => response.json())
        .then(data => setUserState(data.data));
    }, []);
    return (
    <div>
       <div>{userState.name}</div>
       <div>{userId}</div>
       <div>{userState.age}</div>
       <div>{userState.dob}</div>
    </div>);
}