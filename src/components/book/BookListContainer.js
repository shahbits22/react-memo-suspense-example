import { connect } from "react-redux";
import BookList from "./BookList";
import actions from "./BookActions";

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBook: content => {
      dispatch(actions.create(content));
    },
    update: book => {
      dispatch(actions.update(book));
    },
    remove: id => {
      dispatch(actions.remove(id));
    },

    selectBook: book => {
      dispatch(actions.selectBook(book));
    }
  };
};
let BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export default BookListContainer;
