import { useContext } from "react";
import { Context } from "./AdminToken";

function ProducrTable() {
   const { productsList, totalPrice, dispatch, deliveryCost } =
     useContext(Context);
  return (
    <div>
      <div className="mt-14 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, index) => (
              <tr
                className=" cursor-pointer hover:opacity-50"
                key={product.id}
                onClick={() => {
                  dispatch({ type: "REMOVE_PRODUCT", payload: product.id });
                }}
              >
                <th>{index + 1}</th>
                <td>
                  {product.count}*{product.name}
                </td>
                <td>{product.price}</td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td>Total Price</td>
              <td>{totalPrice}</td>
            </tr>
            <tr>
              <th></th>
              <td>Delivery Cost</td>
              <td>{deliveryCost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProducrTable
