import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteOrder, getAlist } from "../../services/orderlits";
import AdminListProductTable from "./AdminListProductTable";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { HiOutlineDownload } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import formateDate from "../../services/formateDate";
import { MdEdit } from "react-icons/md";
import MyDocument from "../../invoicePdf/invoice";
import toast from "react-hot-toast";

function AdminOrderOverview() {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["order-list-overView"],
    queryFn: async () => {
      const data = await getAlist(id);
      return data;
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (token) => {
      await deleteOrder(token);
      return;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order-list"] });
    },
  });

  function deleteList() {
    mutate(data[0].customer_token);
    toast.success("Order deleted successfully", {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
    navigateTo("/admin/order-lists");
  }

  if (isLoading) return;
  const products = JSON.parse(data[0].products);
  console.log(products);
  return (
    <div className=" relative m-auto mt-20 mb-10 w-[90%] rounded-md bg-base-300 p-10 lg:w-[70%] ">
      <div className=" flex flex-col gap-3">
        <h2 className=" text-3xl font-bold uppercase">
          Name: {data[0].customer_name || "null"}
        </h2>
        <h2 className=" text-xl ">
          Phone : {data[0].customer_phone || "null"}
        </h2>
        <h2 className=" text-xl ">
          Email : {data[0].customer_email || "null"}
        </h2>
        <h2 className=" text-xl ">
          Address : {data[0].customer_address || "null"}
        </h2>
        <h2 className=" text-xl ">
          Additional Information : {data[0].customer_comment || "null"}
        </h2>
        <h2 className=" text-xl ">
          Order Date : {formateDate(data[0].created_at) || "null"}
        </h2>
      </div>
      <h2 className=" right-[40px] top-[40px] text-xl italic max-lg:mt-5 lg:absolute">
        {" "}
        Token : {data[0].customer_token}{" "}
      </h2>

      <AdminListProductTable item={data[0]} productsList={products} />
      <button
        onClick={deleteList}
        className="btn right-[40px] top-[80px] ml-auto mt-5 max-md:w-full lg:absolute"
      >
        <RiDeleteBinLine />
      </button>
      <Link to={`/admin/order-lists/${data[0].customer_token}/edit`}>
        <button className="btn right-[40px] top-[140px] ml-auto mt-5 max-md:w-full lg:absolute">
          <MdEdit />
        </button>
      </Link>

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
                className="btn right-[40px] top-[200px] ml-auto mt-5 max-md:w-full lg:absolute"
              >
                <span className="loading loading-ring loading-md"></span>
              </button>
            );
          }
          return (
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="btn right-[40px] top-[200px] ml-auto mt-5 max-md:w-full lg:absolute"
            >
              <HiOutlineDownload />
            </button>
          );
        }}
      </PDFDownloadLink>
    </div>
  );
}

export default AdminOrderOverview;
