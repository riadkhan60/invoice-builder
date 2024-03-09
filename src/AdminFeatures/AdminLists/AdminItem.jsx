import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../services/orderlits";
import { useMutation, useQueryClient } from "react-query";
import MyDocument from "../../pdf/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

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
        <button onClick={deleteList} className="btn ">
          {" "}
          Delete
        </button>
       
      </td>
    </tr>
  );
}

export default AdminItem
