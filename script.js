const addBookbtn = document.querySelector(".addBookButton");
const modalBackground = document.querySelector(".addBookModal");
const form = document.querySelector("#bookinfo");
const content = document.querySelector(".content");
const myCheckbox = document.querySelector("#myCheckbox");

const myLibrary = [];
const modalToggled = false;

addBookbtn.addEventListener("click", function() {
  document.querySelector('.addBookModal').classList.remove('hidden');
});

modalBackground.addEventListener("click", function(event) {
  if (event.target === modalBackground) {
    modalBackground.classList.add('hidden');
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  validate_input(form);
});

function validate_input(form) {
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = myCheckbox.checked ? "Read" : "Not Read";
  if (title === "" || author === "" || pages === "") {
    alert("Fill all elements of the form");
  } else {
    wipe_form(form);
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    populateTile(newBook);
    modalBackground.classList.add('hidden');
  }
}

function wipe_form(form) {
  form.title.value = "";
  form.author.value = "";
  form.pages.value = "";
  myCheckbox.checked = false;
}

function populateTile(book) {
  const bookTile = document.createElement("div");
  bookTile.classList.add("bookTile");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = book.title;
  bookTile.appendChild(title);

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = book.author;
  bookTile.appendChild(author);

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = book.pages;
  bookTile.appendChild(pages);

  const read = document.createElement("div");
  if (book.read === "Read") {
    read.classList.add("read");
    read.textContent = "Read";
  } else {
    read.classList.add("notRead");
    read.textContent = "Not Read";
  }
  bookTile.appendChild(read);

  read.addEventListener("click", function() {
    if (read.classList.contains("read")) {
      markNotRead(read);
    } else {
      markRead(read);
    }
  });

  const remove = document.createElement("div");
  remove.classList.add("remove");
  remove.textContent = "Remove";
  bookTile.appendChild(remove);
  
  remove.addEventListener("click", function() {
    bookTile.remove();
  });

  content.appendChild(bookTile);
}

function markRead(read) {
  read.classList.remove("notRead");
  read.classList.add("read");
  read.textContent = "Read";
}

function markNotRead(read) {
  read.classList.remove("read");
  read.classList.add("notRead");
  read.textContent = "Not Read";
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
