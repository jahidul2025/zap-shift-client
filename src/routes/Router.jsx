import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import NotFound from "../pages/NotFound/NotFound";
import Mission from "../pages/Home/AboutUs/tabs/Mission";
import Success from "../pages/Home/AboutUs/tabs/Success";
import TeamAndOthers from "../pages/Home/AboutUs/tabs/TeamAndOthers";
import Story from "../pages/Home/AboutUs/tabs/Story";
import Services from "../pages/Services/Services";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Raider from "../pages/Raider/Raider";
import SendParcel from "../pages/SendParcel/SendParsel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'aboutUs',
        Component: AboutUs,
        children: [
          {
            path: 'story',
            Component: Story
          },
          {
            path: 'mission',
            Component: Mission
          },
          {
            path: 'success',
            Component: Success
          },
          {
            path: 'team',
            Component: TeamAndOthers
          }
        ]
      },
      {
        path: 'services',
        Component: Services
      },
      {
        path: 'raider',
        element: <PrivetRoute><Raider></Raider></PrivetRoute>
      },
      {
        path: 'send-parcel',
        element: <PrivetRoute><SendParcel></SendParcel></PrivetRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);