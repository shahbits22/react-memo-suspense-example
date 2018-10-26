import constants from "./BookConstants";
import controller from "./BookController";

const initialState = { books: controller.findAll() };

export default function bookListReducer(state = initialState, action) {
  switch (action.type) {
    case constants.BOOK_CREATE:
    case constants.BOOK_FIND_ALL:
    case constants.BOOK_UPDATE:
    case constants.BOOK_DELETE:
      return {
        ...state,
        books: action.books
      };

    default:
      return state;
  }
}
