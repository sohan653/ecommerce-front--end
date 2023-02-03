import React from 'react';
import { useAuth } from '../../context/auth';

const UserOrders = () => {
    const [auth, setAuth] = useAuth();
    return (
        <div>
            this is order
        </div>
    );
};

export default UserOrders;