import React from 'react'
import { createContext,useState } from 'react'

export const Authcontext=createContext();

export const AuthProvider = ({ children }) => {
    const [email ,setemail]=useState(null);
    const [role,setrole]=useState(null);
    const [filled,setfilled]=useState(null);
   
    return(
        <Authcontext.Provider value={{email,role, setemail, setrole,filled,setfilled}}>
            {children}
        </Authcontext.Provider>
    )
}