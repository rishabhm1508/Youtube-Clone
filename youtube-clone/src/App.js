import { Provider } from "react-redux";
import { Body } from "./components/body";
import { Header } from "./components/header";
import appStore from "./utils/store/app.store";

function App() {
  return (
    <Provider store={appStore}>
      <div className="w-full">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
