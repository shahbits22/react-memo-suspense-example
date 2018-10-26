import { connect } from "react-redux";
import BookDetail from "./BookDetail";
import actions from "./BookActions";

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book
  };
};

let BookDetailContainer = connect(mapStateToProps)(BookDetail);

export default BookDetailContainer;
