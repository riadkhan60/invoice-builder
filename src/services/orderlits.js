import supabase from "./services"

export async function createOrder(newOrder) {
  const { data, error } = await supabase.from("orders").insert([
    // {
    //   products: JSON.stringify([
    //     {
    //       productId: 1,
    //       categoryId: 11,
    //       id: 11,
    //       name: "Product 1 Category 11",
    //       price: 600,
    //       count: 2,
    //     },
    //     {
    //       productId: 2,
    //       categoryId: 21,
    //       id: 21,
    //       name: "Product 2 Category 21",
    //       price: 200,
    //       count: 1,
    //     },
    //   ]),
    //   total_price: 800,
    //   delivery_cost: 550,
    //   paid: true,
    //   customer_token: "adad342sfas",
    //   customer_name: "riad",
    //   customer_email: "kWqg7@example.com",
    //   customer_phone: "0123456789",
    //   customer_address: "123 Main Street",
    //   customer_comment: "this is a comment",
    // },
    newOrder
  ]);

if (error) {
  console.error('Error inserting data:', error)
} else {
  console.log('Data inserted successfully:', data)
}
} // function


export async function loadList() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    console.error("Error fetching data:", error);
  } else {
    return data;
  }
}


export async function updateCustomerInfo() {
  const customerToken = "1t2foq"; // Replace with the actual customer token value

  const { data, error } = await supabase
    .from("orders")
    .update({
      customer_name: 'rrrrasdadadad',
      customer_phone: '0123adad4',
    })
    .eq("customer_token", customerToken);

  if (error) {
    console.error("Error updating order:", error);
  } else {
    console.log("Order updated successfully:", data);
  }
}


export async function getAlist(token) {
  const customerToken = token; // Replace with the actual customer token value

  console.log(token)
const { data, error } = await supabase
  .from('orders')
  .select('*')
  .eq('customer_token', customerToken);

if (error) {
  console.error('Error fetching orders:', error);
} else {
  return data;
}
}


export async function deleteOrder(token) {
  const customerToken = token; // Replace with the actual customer token value

  // To delete a single record
  const { data: singleDeleteData, error: singleDeleteError } = await supabase
    .from("orders")
    .delete()
    .eq("customer_token", customerToken)
    .single();

  if (singleDeleteError) {
    console.error("Error deleting order:", singleDeleteError);
  } else {
    console.log("Order deleted successfully:", singleDeleteData);
  }
}
