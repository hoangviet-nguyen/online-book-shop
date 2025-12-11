import './App.css'
import Home from './sites/Home'
import Product from './sites/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {path: "/", element:<Home/>},
  {path: "/product", element: <Product/>}
])

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
