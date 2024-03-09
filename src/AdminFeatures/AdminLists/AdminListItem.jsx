import { useQuery } from "react-query";
import { loadList } from "../../services/orderlits";
import AdminItem from "./AdminItem";

function AdminListItem() {
  const { data, isLoading } = useQuery({
    queryKey: ["order-list"],
    queryFn: loadList,
  });


  if (isLoading) return;
  return (
    <div className=" lg:w-[50%] w-[95%] m-auto p-10 bg-base-300 mt-20">
      <div className="overflow-x-auto overflow-y-auto ">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th>Token</th>
              <th>Customer Name</th>
              <th>Customer Phone</th>
              <th>Total Price</th>
              <th>Paid</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => <AdminItem item={item} index={index} key={index}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminListItem;
