import Constants from "./BookConstants";
import Controller from "./BookController";

const actions = {
  create(book) {
    console.log("New book:", book);
    let books = Controller.create(book);
    return dispatch => {
      dispatch({
        type: Constants.BOOK_CREATE,
        books
      });
    };
  },
  selectBook(book) {
    return function(dispatch) {
      dispatch({
        type: Constants.BOOK_SELECT,
        book
      });
    };
  },
  findAll() {
    let books = Controller.findAll();
    return function(dispatch) {
      dispatch({
        type: Constants.BOOKS_FIND_ALL,
        books
      });
    };
  },

  update(book) {
    let books = Controller.update(book);
    return function(dispatch) {
      dispatch({
        type: Constants.UPDATE,
        books
      });
    };
  },

  remove(id) {
    let books = Controller.remove(id);
    return function(dispatch) {
      dispatch({
        type: Constants.BOOK_DELETE,
        books
      });
    };
  }
};

export default actions;
