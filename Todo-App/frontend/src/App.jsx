import store from "./router/Routes"
import { RouterProvider } from "react-router"

function App() {

  return (
    <RouterProvider router={store}></RouterProvider>
  )
}

export default App
