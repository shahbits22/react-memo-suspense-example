import React from "react";

const BookName = React.memo(function BookName(props) {
  /*to see React memo in action - keep clicking on different Harry Potter books 
    - notice this component will not re-render even if parent component re-renders*/
  console.log(`rendering...${props.title}`);
  return <div>Title: {props.title}</div>;
});

export default function BookDetail(props) {
  if (!props.book) {
    return <div>Select a book to get started. </div>;
  }
  console.log(
    `Rendering BookDetail - Book Title: ${props.book.title} Total Pages:${
      props.book.pages
    }`
  );
  return (
    <div>
      <h3> Details for:</h3>
      <BookName title={props.book.title} />
      <div>Pages: {props.book.pages}</div>
    </div>
  );
}
