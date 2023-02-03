import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";

const AdminMenu=()=> {
  const [auth,setAuth]=useAuth()
  return (
    <><div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
      <div className="p-3 mt-2 mb-2 h4 bg-light"><NavLink to='/dashboard/admin' className='text-decoration-none'>{auth?.user?.name}</NavLink></div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/category">
            Create category
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/product">
            Create product
          </NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/products">
            Read Products
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

export default AdminMenu;