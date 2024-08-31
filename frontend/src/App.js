import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Adminlogin from './pages/Adminlogin';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Authcontext,AuthProvider } from './context/Authcontext';
import Profile from './pages/Profile';

const PrivateRoute = ({ element, allowedRoles, redirectTo }) => {
    const { email, role } = useContext(Authcontext);

    if (!email) {
        return <Navigate to={redirectTo} />;
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to={redirectTo} />;
    }

    return element;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/adminlogin" element={<Adminlogin />} />
                    <Route path="/dashboard" element={
                        <PrivateRoute
                            element={<Dashboard />}
                            allowedRoles={['admin']}
                            redirectTo="/login"
                        />
                    } />
                    <Route path="/form" element={
                        <PrivateRoute
                            element={<Form />}
                            allowedRoles={['admin', 'user']}
                            redirectTo="/login"
                        />
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={
                        <PrivateRoute
                            element={<Home />}
                            allowedRoles={['admin', 'user']}
                            redirectTo="/login"
                        />
                    } />
                    <Route path='/home' element={
                        <PrivateRoute
                            element={<Home />}
                            allowedRoles={['admin', 'user']}
                            redirectTo="/login"
                        />
                    } />
                    <Route path='/profile' element={
                        <PrivateRoute element={<Profile/>}
                        allowedRoles={['user','admin']}
                        redirectTo="/login"
                        />
                    }/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;

