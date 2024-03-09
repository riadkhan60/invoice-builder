import { useContext, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import copy from "copy-to-clipboard";
import { Context } from "./AdminToken";

function GenerateToken({ token, setToken, disabled, setDisabled }) {
  const [customerName, setCustomerName] = useState("");
  const [textCopy, setCopy] = useState(false);
  const { dispatch } = useContext(Context);

  function handleAddToken(e) {
    if(!token) return
    e.preventDefault();
    dispatch({ type: "ADD_TOKEN", payload: token });
    setDisabled(true);
  }

  function generateToken(e) {
    e.preventDefault();
    setToken(
      customerName.toLowerCase() + Math.random().toString(36).slice(2, 8),
    );
    setCopy(false);
  }
  return (
    <div className="rounded-lg bg-base-300 p-10">
      <h1 className=" text-3xl">Customer Token</h1>
      <div className=" mt-6 flex items-end  gap-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Generate Token</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={customerName}
            disabled={disabled}
            onChange={(e) => {
              setCopy(false);
              setCustomerName(e.target.value);
            }}
          />
        </label>
        <button className="btn" disabled={disabled} onClick={generateToken}>
          Generate
        </button>
      </div>
      <div className="mt-8 flex  items-stretch gap-3">
        <div className=" min-w-[250px] rounded-lg bg-base-100 p-3 max-md:min-w-[200px] ">
          <code>{token}</code>
        </div>
        <div>
          <button
            className="btn"
            onClick={async (e) => {
              e.preventDefault();
              if (!token) return;
              if ("clipboard" in navigator) {
                await navigator.clipboard.writeText(token);
              } else {
                copy(token);
              }
              setCopy(true);
            }}
          >
            {textCopy ? <IoMdDoneAll /> : <FaRegCopy />}
          </button>
        </div>
      </div>
      <button className="btn mt-12 w-full" onClick={handleAddToken} disabled={disabled}>
        Add Token
      </button>
    </div>
  );
}

export default GenerateToken;
