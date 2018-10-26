import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";

import bookListReducer from "./book/BookListReducer";
import bookReducer from "./book/BookReducer";

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    books: bookListReducer,
    book: bookReducer
  }),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

export default store;
