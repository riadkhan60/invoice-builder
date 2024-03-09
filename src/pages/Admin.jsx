import { Outlet, useNavigate } from "react-router-dom";

import AdminMenu from "../AdminFeatures/AdminMenu";
import { useEffect } from "react";
import useAuthValue from "../privetRouter/useAuthValue";

function Admin() {
  const navigateTo = useNavigate();
  const { isAuth} = useAuthValue();
  useEffect(() => {
    if (!isAuth) {
      navigateTo("/");
    }
  }, [isAuth, navigateTo]);
  return (
    <div>
      <AdminMenu />
      <Outlet />
      
    </div>
  );
}

export default Admin;
