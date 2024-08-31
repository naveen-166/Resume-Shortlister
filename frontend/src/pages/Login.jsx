import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from "../assets/login.jpg";
import { Authcontext } from '../context/Authcontext';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const {setemail,setrole,setfilled}=useContext(Authcontext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { message, success,role,filled } = response.data;
            setMessage(message);
            if (success) {
                
                navigate('/home');
                setemail(email);
                setrole(role);
                setfilled(filled);

                console.log(role);
                console.log(email);
                console.log(filled);

            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
<div className="w-screen h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
    <div className="relative flex flex-col items-center w-full max-w-md mx-4 p-8 rounded-xl backdrop-blur-md shadow-2xl bg-white/30 text-white font-Kanit">
        <h3 className="text-center text-3xl font-bold mb-6 text-gray-900">Login</h3>
        <form onSubmit={handleLogin} className="w-full flex flex-col space-y-6">
            <label   className="text-lg font-medium">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="password" className="text-lg font-medium">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
                Log In
            </button>
            <div className="text-center mt-4">
                <a href='/register' className="text-blue-500 hover:text-blue-700 transition duration-300">Register</a>
            </div>
            
        </form>
        {message && <p className="text-red-500 text-sm text-center mt-4">{message}</p>}
    </div>
</div>

    );
}

export default Login;

// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Authcontext } from '../../context/Authcontext';
// import ParticlesBackground from '../components/Partical';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const { setemail, setrole, setfilled } = useContext(Authcontext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       const { message, success, role, filled } = response.data;
//       setMessage(message);
//       if (success) {
//         navigate('/home');
//         setemail(email);
//         setrole(role);
//         setfilled(filled);
//         console.log(role);
//         console.log(email);
//         console.log(filled);
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <ParticlesBackground />
//       <div className="relative flex flex-col items-center w-full max-w-md mx-4 p-8 rounded-xl backdrop-blur-md shadow-2xl bg-white/30 text-white font-Kanit">
//         <h3 className="text-center text-3xl font-bold mb-6 text-gray-900">Login</h3>
//         <form onSubmit={handleLogin} className="w-full flex flex-col space-y-6">
//           <label htmlFor="email" className="text-lg font-medium">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//             className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <label htmlFor="password" className="text-lg font-medium">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Enter your password"
//             className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
//           >
//             Log In
//           </button>
//           <div className="text-center mt-4">
//             <a href='/register' className="text-blue-500 hover:text-blue-700 transition duration-300">Register</a>
//           </div>
//         </form>
//         {message && <p className="text-red-500 text-sm text-center mt-4">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default Login;