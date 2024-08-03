const myLibrary = [];

function Book(title,author,pages) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book)
}
