import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/Store";
import BookListContainer from "./components/book/BookListContainer";
import BookDetailContainer from "./components/book/BookDetailContainer";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BookListContainer />
        <BookDetailContainer />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
