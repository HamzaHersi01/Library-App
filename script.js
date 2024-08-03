
const addBookbtn = document.querySelector(".addBookButton")
const modalBackground = document.querySelector(".addBookModal")
const form = document.querySelector("#bookinfo")
const content = document.querySelector(".content")
console.log(form)

const myLibrary = [];
const modalToggled= false

addBookbtn.addEventListener("click",function(){
  document.querySelector('.addBookModal').classList.remove('hidden');
}
)
modalBackground.addEventListener("click", function(event) {
  if (event.target === modalBackground) {
      modalBackground.classList.add('hidden');
  }
});

form.addEventListener("submit",function(e){
e.preventDefault();
const title = form.title.value
form.title.value = ""
const author = form.author.value
form.author.value = ""
const pages = form.pages.value
form.pages.value = ""
const read = form.read.value
console.log(read)
addBookToLibrary(new Book(title,author,pages,read))
populateTile(new Book(title,author,pages,read))
modalBackground.classList.add('hidden');
})



function populateTile(book){
  //TODO Title, Author, Pages, Read, Remove
  const bookTile = document.createElement("div")
  bookTile.classList.add("bookTile")

  const title = document.createElement("div")
  title.classList.add("title")
  title.textContent = book.title
  bookTile.appendChild(title)

  const author = document.createElement("div")
  author.classList.add("author")
  author.textContent = book.author
  bookTile.appendChild(author)

  const pages = document.createElement("div")
  pages.classList.add("pages")
  pages.textContent = book.pages
  bookTile.appendChild(pages)

  const read = document.createElement("div")
  read.classList.add("read")
  read.textContent = "Read"
  bookTile.appendChild(read)

  const remove = document.createElement("div")
  remove.classList.add("remove")
  remove.textContent = "Remove"
  bookTile.appendChild(remove)

  content.appendChild(bookTile)
}























function Book(title,author,pages,read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book)
}
