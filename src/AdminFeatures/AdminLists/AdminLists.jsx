import { QueryClient, QueryClientProvider } from "react-query";

import { Outlet } from "react-router-dom";
const query = new QueryClient();

function AdminLists() {
  return (
    <QueryClientProvider client={query}>
      <div>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default AdminLists;
