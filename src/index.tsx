import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./Layout";
import './index.css';
import TakeEvery from "./pages/takeEvery";
import TakeLatest from "./pages/takeLatest";
import TakeLeading from "./pages/takeLeading";
import Throttle from "./pages/throttle";
import Take from "./pages/take";

console.log(store.getState(), 'store');
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
          <Provider store={store}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Layout />}></Route>
                      <Route path={'/take'} element={<Take/>}></Route>
                      <Route path={'/takeEvery'} element={<TakeEvery/>}></Route>
                      <Route path={'/takeLatest'} element={<TakeLatest/>}></Route>
                      <Route path={'/takeLeading'} element={<TakeLeading/>}></Route>
                      <Route path={'/throttle'} element={<Throttle/>}></Route>
                      {/*<Route path={'/'} element={<App />}></Route>*/}
                  </Routes>
              </BrowserRouter>
              {/*<App />*/}
          </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
