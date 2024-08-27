import Checkout from "./screens/Checkout";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Checkout />
      </Provider>
    </>
  );
}

export default App;
