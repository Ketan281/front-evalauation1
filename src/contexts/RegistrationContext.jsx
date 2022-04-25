import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [id, setId] = useState("");

    const register = (id) => {
        setId(id);
        setIsAuth(true);
    }

    return <RegistrationContext.Provider value={
        {
            isAuth,
            id,
            register,
        }
    }>
        {children}
    </RegistrationContext.Provider>
}