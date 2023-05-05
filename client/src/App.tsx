import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Calendar from './components/Calendar';
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";

const router = createBrowserRouter([
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
]);

function App() {
  return (
    <RouterProvider router = { router }/>
  );
}

export default App;