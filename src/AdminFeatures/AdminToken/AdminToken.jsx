import { createContext, useReducer, useState } from "react";
import GenerateToken from "./GenerateToken";
import AddProductForm from "./AddProductForm";

export const Context = createContext();

const innitialState = {
  products: [],
  totalPrice: 0,
  deliveryCost: 0,
  paid: true,
  customerToken: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (state.products.find((product) => product.id === action.payload.id)) {
        const product = state.products.find(
          (product) => product.id === action.payload.id,
        );
        product.count = product.count + action.payload.count;
        product.price = product.price + action.payload.price;

        return {
          ...state,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        totalPrice: action.payload.price + state.totalPrice,
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
        totalPrice:
          state.totalPrice -
          state.products.find((product) => product.id === action.payload).price,
      };

    case "ADD_TOKEN":
      return { ...state, customerToken: action.payload };

    case "ADD_DELIVERY_COST":
      return { ...state, deliveryCost: action.payload };

    case "RESET":
      return { ...state, ...innitialState };
  }
}

function AdminToken() {
  const [token, setToken] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [state, dispatch] = useReducer(reducer, innitialState);

  const { products, totalPrice, deliveryCost, customerToken } = state;
  console.log(totalPrice);
  return (
    <Context.Provider
      value={{
        productsList: products,
        dispatch,
        totalPrice,
        deliveryCost,
        customerToken,
        state
      }}
    >
      <div className="mt-8  flex items-center justify-center gap-8 px-8 max-lg:mt-10 max-lg:flex-col lg:h-[80vh] lg:items-center lg:gap-6 xl:gap-10">
        <GenerateToken
          token={token}
          setToken={setToken}
          disabled={disabled}
          setDisabled={setDisabled}
        />
        <AddProductForm setToken={setToken} setDisabled={setDisabled} />
      </div>
    </Context.Provider>
  );
}

export default AdminToken;
