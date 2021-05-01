import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { routes } from "./router/config";
// import localeSettings from "./helpers/localeSettings";
import store from "./store";

function App() {
  useEffect(() => {

  }, []);

  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <BrowserRouter>
          <Router routes={routes} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
