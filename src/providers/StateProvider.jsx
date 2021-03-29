import React, { useState } from 'react';

// set a variable to export to state handlers into components
export const StateContext = React.createContext({})

const StateProvider = ({ children }) => {

    // create a set of variables to use and change
    const [active, setActive] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    // create a set of function to change said variables
    const activeHandler = () => {
        setActive(!active);
    }
    const loggedInHandler = () => {
        setLoggedIn(!loggedIn);
    }
    const addressHandler = (userAddress) => {
        setAddress(userAddress);
    }
    const nameHandler = (userName) => {
        setName(userName);
    }
return (
    <StateContext.Provider value={{
        active, activeHandler,
        loggedIn, loggedInHandler,
        address, addressHandler,
        name, nameHandler
    }}>
        {children}
    </StateContext.Provider>
)}

export default StateProvider
