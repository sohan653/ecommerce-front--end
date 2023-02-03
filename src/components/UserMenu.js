import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";

const UserMenu=()=> {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
            <div className="p-3 mt-2 mb-2 h4 bg-light"><NavLink className="text-decoration-none" to='/dashboard/user'>{auth?.user?.name}</NavLink></div>

                    <ul className="list-group list-unstyled">
                    <li>
                        <NavLink className="list-group-item" to="/dashboard/user/profile">
                        Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="list-group-item" to="/dashboard/user/orders">
                        Orders
                        </NavLink>
                    </li>
                    </ul>
             </div>
      <div className="col-md-9">
        <Outlet></Outlet>
      </div>
      </div>
      </div>
    </>
  );
}

export default UserMenu;







