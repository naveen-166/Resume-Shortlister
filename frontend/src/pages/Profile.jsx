import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../context/Authcontext';

function Profile() {
    const { email, filled,setemail,setrole,setfilled } = useContext(Authcontext);
    const [fill, setFill] = useState("");

    useEffect(() => {
        setFill(filled ? "Filled" : "Not filled");
    }, [filled]);
    const logout=(()=>{
        setemail(null);
        setrole(null);
        setfilled(null);
        // console.log("logout")

    })

    return (
        <div className='bg-black w-screen h-screen text-white flex items-center justify-center'>
            <div className='flex flex-col items-center space-y-7'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <div className='space-y-4 mr-44'>
                    <p className=' text-lg font-oswald'>Email : <span className=' font-Kanit'>{email}</span></p>
                    <p className=' text-lg font-oswald'>Form Filled :<span className=' font-Kanit'> {fill}</span></p>
                    <p className=' text-lg font-oswald'>Application Status : </p>
                    
                </div>
                <button onClick={logout} className='bg-red-600 h-8 w-64 rounded-md font-Kanit  font-semibold hover:bg-red-700 hover:shadow-2xl hover:shadow-white'>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
