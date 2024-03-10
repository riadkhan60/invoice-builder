import { Link, useNavigate } from "react-router-dom";
import { GiToken } from "react-icons/gi";
import { LiaListSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import useAuthValue from "../privetRouter/useAuthValue";

function AdminMenu() {
  const navigateTo = useNavigate();
  const { setIsAuth } = useAuthValue();
  function handleLogout() {
    setIsAuth(false);
    sessionStorage.setItem("isAuth", "false");
    navigateTo("/");
  }
  return (
    <div className=" mt-5 flex items-center justify-center">
      <ul className="menu items-center menu-horizontal gap-2 rounded-box bg-base-200">
        <li>
          <Link to={"/admin/token"}>
            Generate Token <GiToken />
          </Link>
        </li>
        <li>
          <Link to={"/admin/order-lists"}>
            Order Lists <LiaListSolid />
          </Link>
        </li>
        <li onClick={handleLogout}>
          <a>
  
          <IoIosLogOut />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AdminMenu;
