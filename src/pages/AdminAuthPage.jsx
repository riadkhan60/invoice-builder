import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthValue from "../privetRouter/useAuthValue";
import { companyName } from "../data/formBuildData";
import getPassword from "../services/adminPanel";

function AdminAuthPage() {
  const [pinInput, setpinInput] = useState("");
  const navigateTo = useNavigate();
  const { isAuth, setIsAuth } = useAuthValue();

  const onSubmit = async (e) => {
    e.preventDefault();
    const isAuth = await getPassword(pinInput);
    if (isAuth) {
      setIsAuth(true);
      sessionStorage.setItem("isAuth", "true");
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigateTo("/admin");
    }
  }, [isAuth, navigateTo]);

  return (
    <div>
      <h2 className=" mt-5 text-center text-2xl font-bold uppercase">
        {companyName}
      </h2>
      <div className="flex h-[80vh] items-center justify-center ">
        <form
          onSubmit={onSubmit}
          className=" flex items-center justify-center gap-2"
        >
          <input
            type="text"
            value={pinInput}
            placeholder="Admin Code"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setpinInput(e.target.value)}
          />
          <button className="btn btn-primary">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default AdminAuthPage;
