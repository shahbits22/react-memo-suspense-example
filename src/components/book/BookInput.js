import React from "react";

export default function BookInput(props) {
  let _title, _pages;

  function submit(e) {
    e.preventDefault();
    props.addBook({ title: _title.value, pages: _pages.value });
    _title.value = "";
    _pages.value = "";
  }

  return (
    <form onSubmit={submit}>
      <div className="item-new">
        <label htmlFor="name">Book Name: </label>
        <input
          ref={input => (_title = input)}
          type="text"
          name="bookName"
          className="input"
        />
        <label htmlFor="name">Pages: </label>
        <input
          ref={input => (_pages = input)}
          type="text"
          name="bookPages"
          className="input"
        />
      </div>
      <br />
      <button>Submit</button>
    </form>
  );
}
