import { Provider } from "react-redux";
import { Header } from "./components/header";
import appStore from "./utils/store/app.store";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [goHome, setGoHome] = useState(false);

  if (goHome) {
    <Navigate to="/" />;
  }
  return (
    <Provider store={appStore}>
      <div className="w-full">
        <Header navigate={setGoHome} />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
