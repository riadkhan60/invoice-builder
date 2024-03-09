import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOrder, getAlist } from "../../services/orderlits";
import AdminListProductTable from "./AdminListProductTable";

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

  const { mutate } = useMutation(
    {
      mutationFn: async (token) => {
       await deleteOrder(token);
        return;
      },

      onSuccess: () => {
        console.log('ss')
        queryClient.invalidateQueries({ queryKey: ["order-list"] });
      }
      
    }
  )

  function deleteList() {
    mutate(data[0].customer_token);
    navigateTo('/admin/order-lists')
 }

  if (isLoading) return;
  const products = JSON.parse(data[0].products);
  console.log(products)
  return (
    <div className=" m-auto mt-20 w-[90%] lg:w-[70%] rounded-md bg-base-300 p-10 relative ">
      <div className=" flex flex-col gap-3">
        <h2 className=" text-3xl uppercase font-bold">{data[0].customer_name}</h2>
        <h2 className=" text-xl ">Phone : {data[0].customer_phone || "null"}</h2>
        <h2 className=" text-xl ">Email : {data[0].customer_email || "null"}</h2>
        <h2 className=" text-xl ">Address : {data[0].customer_address || "null"}</h2>
      </div>
      <h2 className=" text-xl italic max-lg:mt-5 lg:absolute top-[40px] right-[40px]"> Token : {data[0].customer_token} </h2>
      
      <AdminListProductTable item={data[0]} productsList={products} />
      <button onClick={deleteList} className="btn lg:absolute top-[80px] right-[40px] ml-auto mt-5 max-md:w-full"> Delete</button>
    </div>
  );
}

export default AdminOrderOverview
