import { useContext, useState } from "react";
import { products } from "../../data/formBuildData";
import ProducrTable from "./ProducrTable";

import { MdOutlineAdd } from "react-icons/md";
import { Context } from "./AdminToken";
import copy from "copy-to-clipboard";
import { IoMdDoneAll } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { createOrder, getAlist, loadList, updateCustomerInfo } from "../../services/orderlits";

function AddProductForm({ setDisabled, setToken }) {
  const [deliveryCost, setDeliveryCost] = useState(0);
  const { dispatch, productsList, customerToken, state } = useContext(Context);
  const [productName, setProduct] = useState("Pick one");
  const [productCategory, setCategory] = useState("Pick one");
  const [saved, setSaved] = useState(false);
  const [link, setLink] = useState("www.google.com");
  const [textCopy, setCopy] = useState(false);

  async function handleSave() {
    if (productsList.length < 1 || !customerToken) return;
    const data = {
      products: JSON.stringify(state.products),
      total_price: state.totalPrice,
      delivery_cost: state.deliveryCost,
      paid: true,
      customer_token: state.customerToken,
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      customer_address: "",
      customer_comment: "",
    };
    await createOrder(data);
    setSaved(true);
    
  }

  async function handleNew() {
    await loadList();
    setSaved(false);
    setToken("");
    setDisabled(false);
    dispatch({ type: "RESET" });
  }
  function onAddProduct(e) {
    e.preventDefault();
    const product = products.find((product) => product.name === productName);

    if (productCategory === "Pick one" || productName === "Pick one") {
      return;
    }

    const category = product.category.find(
      (category) => category.name === productCategory,
    );

    const obj = {
      productId: product.id,
      categoryId: category.id,
      id: category.id,
      name: `${product.name} ${category.name}`,
      price: category.price,
      count: 1,
    };

    dispatch({ type: "ADD_PRODUCT", payload: obj });
  }

  function onAddDeliveryCost(e) {
    e.preventDefault();
    dispatch({ type: "ADD_DELIVERY_COST", payload: deliveryCost });
  }

  if (saved) {
    return (
      <div className="rounded-lg bg-base-300 p-10">
        <div className=" mt-6 flex  gap-4  ">
          <div className=" min-w-[250px] rounded-lg bg-base-100 p-3 max-md:min-w-[200px] ">
            <code>{link}</code>
          </div>
          <div>
            <button
              className="btn"
              onClick={async (e) => {
                if (link.length < 3) return;
                e.preventDefault();
                if ("clipboard" in navigator) {
                  await navigator.clipboard.writeText(link);
                } else {
                  copy(link);
                }
                setCopy(true);
              }}
            >
              {textCopy ? <IoMdDoneAll /> : <FaRegCopy />}
            </button>
          </div>
        </div>
        <button className="btn mt-6 w-full" onClick={handleNew}>
          Create New
        </button>
        <button onClick={async () => await updateCustomerInfo()}>update</button>
        <button onClick={async () => await getAlist()}>update</button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-base-300 p-10">
      <h1 className=" text-3xl">Add Product</h1>
      <div className=" mt-6 flex gap-4  max-lg:flex-wrap lg:items-end ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Product</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => {
              setProduct(e.target.value);
              setCategory("Pick one");
            }}
            value={productName}
          >
            <option disabled>Pick one</option>
            {products.map((product) => (
              <option key={product.id}>{product.name}</option>
            ))}
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Category</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => setCategory(e.target.value)}
            value={productCategory}
          >
            <option disabled>Pick one</option>
            {products
              .find((product) => product.name === productName)
              ?.category.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
          </select>
        </label>
        <button className="btn mt-8 max-lg:w-full" onClick={onAddProduct}>
          <MdOutlineAdd />
        </button>
      </div>
      <div>
        <ProducrTable />
      </div>
      <div className=" mt-5 flex items-end gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Delivery Cost</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={deliveryCost}
            onChange={(e) => setDeliveryCost(e.target.value)}
          />
        </label>

        <button className="btn mt-8 " onClick={onAddDeliveryCost}>
          Add
        </button>
      </div>
      <div className=" mt-6 flex items-center gap-4">
        <button className="btn w-full" onClick={handleSave}>
          Save Token
        </button>
        
      </div>
    </div>
  );
}

export default AddProductForm;
