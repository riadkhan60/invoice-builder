import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../services/orderlits";
import { useMutation, useQueryClient } from "react-query";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineDownload } from "react-icons/hi";
import MyDocument from "../../invoicePdf/invoice";
import toast from "react-hot-toast";

function AdminItem({ item, index }) {
  const navigateTo = useNavigate();
  function navigateFullView() {
    navigateTo(`/admin/order-lists/${item.customer_token}`);
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (token) => {
      await deleteOrder(token);
      return;
    },

    onSuccess: () => {
      console.log("ss");
      queryClient.invalidateQueries({ queryKey: ["order-list"] });
    },
  });

  function deleteList(e) {
    e.stopPropagation();
    mutate(item.customer_token);
    toast.success("Order deleted successfully", {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
    navigateTo("/admin/order-lists");
  }
  return (
    <tr
      onClick={navigateFullView}
      className="cursor-pointer hover:bg-base-200 "
    >
      <th>{index + 1}</th>
      <td>{item.customer_token}</td>
      <td>{item.customer_name ? item.customer_name : "null"}</td>
      <td>{item.customer_phone ? item.customer_phone : "null"}</td>
      <td>{item.total_price + item.delivery_cost}</td>
      <td>{item.paid ? "paid" : "unpaid"}</td>
      <td>
        <div className="flex gap-4 items-center">

        <button onClick={deleteList} className="btn ">
          {" "}
          <RiDeleteBinLine />
        </button>
        <PDFDownloadLink
          document={<MyDocument data={item} />}
          fileName={`invoice-${item.customer_name || item.customer_token}`}
        >
          {({ loading }) => {
            if (loading) {
              return (
                <button onClick={(e)=>{e.stopPropagation()}} className="btn  uppercase">
                  <span className="loading loading-ring loading-md"></span>
                </button>
              );
            }
            return (
              <button onClick={(e)=>{e.stopPropagation()}} className="btn uppercase">
                <HiOutlineDownload />
              </button>
            );
          }}
        </PDFDownloadLink>
        </div>
      </td>
    </tr>
  );
}

export default AdminItem
