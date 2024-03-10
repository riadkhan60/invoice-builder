import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiReceipt } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {  useState } from "react";

import { updateCustomerInfo } from "../../services/orderlits";
import toast from "react-hot-toast";


function AdminInvoiceForm() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  async function onSubmit(data) {
    const savedData = await updateCustomerInfo(data, token);
    if (savedData.length === 0) {
      setError(true);
    }
    toast.success("Order edited successfully", {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
    navigate("/admin/order-lists");
  }
  if (error) {
    return (
      <div className="mt-[30px] text-center text-3xl text-red-500">
        Please use the right link given from xyzStore{" "}
      </div>
    );
  }
  return (
    <div className="flow-root h-[80vh] overflow-hidden">
      <div className="mt-[30px] flex items-center justify-center max-md:mt-0">
        <div className="p-6">
          <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid gap-x-3  gap-y-5 rounded-lg bg-base-300 p-6 md:gap-x-6  md:gap-y-8">
              <label className="form-control w-full max-w-xs ">
                <div className="label">
                  <span className="label-text text-slate-300"> Full Name</span>
                  <span className="label-text text-slate-300">
                    <FiUser />
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs "
                  {...register("name")}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-300">
                    Phone Number
                  </span>
                  <span className="label-text text-slate-300">
                    <IoPhonePortraitOutline />
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phoneNumber")}
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-300">Email</span>
                  <span className="label-text text-slate-300">
                    <IoPhonePortraitOutline />
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email")}
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-300">
                    Home Address
                  </span>
                  <span className="label-text text-slate-300">
                    <IoLocationOutline />
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-20 w-full max-w-xs resize-none"
                  placeholder="Customer full address"
                  {...register("address")}
                ></textarea>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-300">Comment</span>
                  <span className="label-text text-slate-300">
                    <FaRegCommentDots />
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-20 w-full max-w-xs resize-none"
                  placeholder="Customer requirements"
                  {...register("comment")}
                ></textarea>
              </label>
              <div className=" flex justify-center items-center">

              <h2>Token: {token}</h2>
              </div>
              <div className=" col-span-2 mt-2 flex  items-center justify-center">
                <button className="btn  btn-block uppercase">
                  Save <CiReceipt />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminInvoiceForm;
