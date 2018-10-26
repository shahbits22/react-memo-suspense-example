import React from "react";

function BookForm(props) {
  return (
    <form onSubmit={submit}>
      <div className="item-new">
        <input ref={handleInput} type="text" name="content" className="input" />
      </div>
    </form>
  );
}

export default function BookList(props) {}
