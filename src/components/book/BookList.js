import React, { Component, Suspense } from "react";
//import BookInput from "./BookInput";
const BookInput = React.lazy(() => import("./BookInput"));
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  renderList = () => {
    return this.props.books.map(book => {
      return (
        <li
          key={book.id}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  };

  handleInputChange = event => {
    this.setState({ show: event.target.checked });
  };
  render() {
    return (
      <div>
        <label>
          Show book form:
          <input
            name="showBook"
            type="checkbox"
            checked={this.state.show}
            onChange={this.handleInputChange}
          />
        </label>
        {this.state.show ? (
          <Suspense fallback={<div>Loading...</div>}>
            <BookInput addBook={this.props.addBook} />
          </Suspense>
        ) : null}
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}
