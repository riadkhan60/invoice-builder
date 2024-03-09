import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthProvider from "./privetRouter/AuthProvider";
import AdminAuthPage from "./pages/AdminAuthPage";
import Admin from "./pages/Admin";
import InvoiceForm from "./pages/InvoiceForm";
import AdminToken from "./AdminFeatures/AdminToken/AdminToken";
import AdminLists from "./AdminFeatures/AdminLists/AdminLists";
import AdminListItem from "./AdminFeatures/AdminLists/AdminListItem";
import AdminOrderOverview from "./AdminFeatures/AdminLists/AdminOrderOverview";


const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminAuthPage />,
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AdminToken />,
      },
      {
        path: "token",
        element: <AdminToken />,
      },
      {
        path: "order-lists",
        element: <AdminLists />,
        children: [
          {
            index: true,
            element: <AdminListItem />,
          },
          {
            path: ":id",
            element: <AdminOrderOverview />,
          }
        ]
      },
    ],
  },
  {
    path: "inovie-form",
    element: <InvoiceForm />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
