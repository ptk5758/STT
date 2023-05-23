import Login from '../page/login'
import Home from '../page/calendar'
import Calendar from '../page/calendar';
import { createBrowserRouter } from "react-router-dom";

interface RouterItem {
    path: string
    element: JSX.Element
}

const RouterInfo : RouterItem[] = [
    {
        path: "/login",
        element: (
          <Login/>
        ),
      },
      {
        path: "/",
        element: (
          <Home/>
        ),
      },
      {
        path: "/calendar",
        element: (
          <Calendar/>
        ),
      },
]

export const routers = createBrowserRouter(
   RouterInfo.map((item) => {
    return{
        path: item.path,
        element: item.element
    }
   })
);