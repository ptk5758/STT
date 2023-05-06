import React from 'react';
import './App.css';
import { routers } from './components/Router';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router = { routers }/>
  );
}

export default App;