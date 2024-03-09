import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlinePaid } from "react-icons/md";
import { CiReceipt } from "react-icons/ci";
import { useForm } from "react-hook-form";

function InvoiceForm() {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="mt-[30px] flex items-center justify-center max-md:mt-0">
      <div className="  px-6 pt-2">
        <form className=" ">
          <div className="form-control col-span-2 ">
            <div className="  flex  justify-end">
              <label className="label flex cursor-pointer items-center justify-end gap-3 ">
                <MdOutlinePaid />
                Paid
                <input
                  type="checkbox"
                  {...register("paid")}
                  defaultChecked
                  className="checkbox-primary accent-sky-400"
                />
              </label>
            </div>
          </div>
          <div className=" grid gap-x-3 gap-y-5 md:gap-x-6  md:gap-y-8">
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
                {...register("name", { required: true })}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-slate-300">Phone Number</span>
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
                <span className="label-text text-slate-300">Home Address</span>
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
                <span className="label-text text-slate-300">
                  Customer Comment
                </span>
                <span className="label-text text-slate-300">
                  <FaRegCommentDots />
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-20 w-full max-w-xs resize-none"
                placeholder="Customer requirements"
                {...register("additionalInformation")}
              ></textarea>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text  text-slate-300">Select Item</span>
                <span className="label-text-alt">
                  <MdOutlineProductionQuantityLimits />
                </span>
              </div>
              <select
                className="select select-bordered"
                defaultValue={"Nitro"}
                {...register("product", { required: true })}
              >
                <option disabled>Pick one</option>
                <option>Nitro</option>
                <option>Other</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text  text-slate-300">
                  Item Quantity
                </span>
                <span className="label-text-alt text-slate-300">
                  <CiBoxList />
                </span>
              </div>
              <select
                className="select select-bordered"
                defaultValue={"250gm"}
                {...register("productQuantity", { required: true })}
              >
                <option disabled>Pick one</option>
                <option>50gm</option>
                <option>100gm</option>
                <option>150gm</option>
                <option>200gm</option>
                <option>250gm</option>
                <option>300gm</option>
                <option>400gm</option>
                <option>500gm</option>
                <option>1kg</option>
                <option>1.5kg</option>
                <option>2kg</option>
                <option>3kg</option>
              </select>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-slate-300">
                  {" "}
                  Product Price
                </span>
                <span className="label-text text-slate-300">
                  <IoPricetagOutline />
                </span>
              </div>
              <input
                type="number"
                placeholder="In BDT"
                className="input input-bordered w-full max-w-xs"
                defaultValue={500}
                {...register("price", { required: true })}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-slate-300">
                  {" "}
                  Delivery Cost
                </span>
                <span className="label-text text-slate-300">
                  <FaDollarSign />
                </span>
              </div>
              <input
                type="number"
                placeholder="In BDT"
                className="input input-bordered w-full max-w-xs"
                defaultValue={0}
                {...register("deliveryCost", { required: true })}
              />
            </label>

            <div className=" col-span-2 mt-2 flex  items-center justify-center">
              <button className="btn  btn-block uppercase">
                Create Receipt <CiReceipt />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
