// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Adjust the path based on your structure

const PrivateRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the provided element
    return element;
};

export default PrivateRoute;
