import { Toaster } from "react-hot-toast";
import router from "./router/Routes";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <>
        <RouterProvider router={router} />
        <Toaster />
      </>
    </Provider>
  );
}

export default App;
