import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import "./index.css"
import Movies from "./Movies"
import Homepage from "./assets/components/Homepage"
import { AuthProvider } from "./contexts/AuthContext"
import ProtectedRoute from "./assets/components/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/filmy",
    element: (
      <ProtectedRoute>
        <Movies />
      </ProtectedRoute>
    )
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);