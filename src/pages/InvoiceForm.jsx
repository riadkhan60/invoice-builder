import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiReceipt } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { updateCustomerInfo } from "../services/orderlits";
import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { HiOutlineDownload } from "react-icons/hi";
import MyDocument from "../invoicePdf/invoice";
import Logo from "../Ui/logo";
import toast from "react-hot-toast";

function InvoiceForm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const { token } = useParams();

  const [saved, setSaved] = useState(false);
  async function onSubmit(data) {
    const savedData = await updateCustomerInfo(data, token);
    if (savedData.length === 0) {
      setError(true);
    }

    setData(savedData);
    setSaved(true);

     toast.success("Invoice created successfully, download the pdf now", {
       style: {
         backgroundColor: "black",
         color: "white",
       },
     });
  }
  if (error) {
    return (
      <div className="mt-[30px] text-center text-3xl text-red-500">
        Please use the right link given from xyzStore{" "}
      </div>
    );
  }
  return (
    <div className="flow-root h-[100vh] overflow-hidden">
      <Logo companyName={"startup"} />
      <div className="mt-[70px] flex items-center justify-center max-md:mt-0">
        <div className=" p-6 ">
          <div className=" rounded-lg bg-base-300">
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid gap-x-3 gap-y-5 rounded-lg bg-base-300 p-6 md:gap-x-6  md:gap-y-8">
                <label className="form-control w-full max-w-xs ">
                  <div className="label">
                    <span className="label-text text-slate-300">
                      {" "}
                      Full Name
                    </span>
                    <span className="label-text text-slate-300">
                      <FiUser />
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs "
                    {...register("name", { required: true })}
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
                    {...register("phoneNumber", { required: true })}
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
                    {...register("email", { required: true })}
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
                    {...register("address", { required: true })}
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
                <div className=" flex items-center justify-center">
                  <h2>Token: {token}</h2>
                </div>

                <div className=" col-span-2 mt-2 flex  items-center justify-center">
                  <button disabled={saved} className="btn  btn-block uppercase">
                    Create Receipt <CiReceipt />
                  </button>
                </div>
              </div>
            </form>
            {data.length > 0 && (
              <div className="mx-auto max-w-[454px] pb-6 max-md:p-6 md:mt-6">
                <PDFDownloadLink
                  document={<MyDocument data={data[0]} />}
                  fileName={`invoice-${data[0].customer_name || data[0].customer_token}`}
                >
                  {({ loading }) => {
                    if (loading) {
                      return (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="btn btn-block  uppercase"
                        >
                          <span className="loading loading-ring loading-md"></span>
                        </button>
                      );
                    } else {
                      return (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="btn btn-block uppercase"
                        >
                          Download Invoice
                          <HiOutlineDownload />
                        </button>
                      );
                    }
                  }}
                </PDFDownloadLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceForm;
