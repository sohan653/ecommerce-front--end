import React from 'react';
import { useAuth } from '../../context/auth';

const UserDashBoard = () => {
    const [auth, setAuth] = useAuth();
    return (
        <div className="col-md-9">
        <div className="p-3 mt-2 mb-2 h4 bg-light">User Information</div>

        <ul className="list-group">
          <li className="list-group-item">{auth?.user?.name}</li>
          <li className="list-group-item">{auth?.user?.email}</li>
        </ul>
      </div>
    );
};

export default UserDashBoard;