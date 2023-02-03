import React from 'react';
import { useAuth } from '../../context/auth';

const AdminDashBoard = () => {
    const [auth,setAuth]=useAuth()
    return (
        <div>
             <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Information</div>

<ul className="list-group">
  <li className="list-group-item">{auth?.user?.name}</li>
  <li className="list-group-item">{auth?.user?.email}</li>
  <li className="list-group-item">Admin</li>
</ul>
</div>
       
    );
};

export default AdminDashBoard;