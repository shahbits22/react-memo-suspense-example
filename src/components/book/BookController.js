import uuid from "uuid";

let books = [
  { id: uuid(), title: "Javascript: The Good Parts", pages: 100 },
  { id: uuid(), title: "Harry Potter", pages: 104 },
  { id: uuid(), title: "The Dark Tower", pages: 200 },
  { id: uuid(), title: "Eloquent Ruby", pages: 107 },
  { id: uuid(), title: "Harry Potter", pages: 512 }
];

const controller = {
  create: function(newBook) {
    const book = {
      id: uuid(),
      title: newBook.title,
      pages: newBook.pages
    };

    books = books.concat(book);
    return books;
  },

  findAll: function() {
    return books;
  },

  update: function(newBook) {
    let updatedList = books.map(book => {
      if (book.id === newBook.id) {
        return newBook;
      } else {
        return book;
      }
    });
    books = updatedList;
    return books;
  },

  remove: function(id) {
    let updatedList = books.filter(book => {
      return book.id !== id;
    });

    books = updatedList;
    return books;
  }
};

export default controller;
