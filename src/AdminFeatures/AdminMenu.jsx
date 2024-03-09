import { Link } from "react-router-dom";
import { GiToken } from "react-icons/gi";
import { LiaListSolid } from "react-icons/lia";

function AdminMenu() {
  return (
    <div className=" mt-5 flex items-center justify-center">
      <ul className="menu menu-horizontal gap-2 rounded-box bg-base-200">
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
      </ul>
    </div>
  );
}

export default AdminMenu;
