function AdminListProductTable({item, productsList}) {
  return (
    <div>
      <div className="mt-14 overflow-x-auto">
        <h3 className=" mb-5">Products</h3>
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
              <tr className=" hover:opacity-50" key={product.id}>
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
              <td>{item.total_price}</td>
            </tr>
            <tr>
              <th></th>
              <td>Delivery Cost</td>
              <td>{item.delivery_cost}</td>
            </tr>
            <tr>
              <th></th>
              <td>Grand Total</td>
              <td>{item.total_price + item.delivery_cost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminListProductTable
