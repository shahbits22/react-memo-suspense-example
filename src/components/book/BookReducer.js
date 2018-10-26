import constants from "./BookConstants";

export default function bookReducer(state = null, action) {
  switch (action.type) {
    case constants.BOOK_SELECT:
      return action.book;

    default:
      return state;
  }
}
