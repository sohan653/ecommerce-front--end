import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "./Loading";

const AdminRoute=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const adminCheck = async () => {
      const { data } = await axios.get(`/check-admin`);
      console.log(data)
      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) adminCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading path="" />;
}

export default AdminRoute