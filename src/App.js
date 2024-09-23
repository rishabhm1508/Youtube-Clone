import { Provider } from "react-redux";
import { Header } from "./components/header";
import appStore from "./utils/store/app.store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={appStore}>
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
