import React, { useContext } from 'react';
import { Context } from '../../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>

    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;