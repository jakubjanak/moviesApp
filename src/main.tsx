import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import "./index.css"
import Movies from "./Movies"
import Homepage from "./assets/components/Homepage"
// import { FirebaseUIProvider } from '@firebase-oss/ui-react';
// import SignInPage from "./assets/components/SignInPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/filmy",
    element: <Movies />
  },
  // {
  //   path: "/prihlaseni",
  //   element: <SignInPage />
  // }
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  // <FirebaseUIProvider ui={ui}>
  <RouterProvider router={router} />,
  // </FirebaseUIProvider>
)