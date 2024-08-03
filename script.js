
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
const author = form.author.value
const pages = form.pages.value
const read = form.read.value
addBookToLibrary(new Book(title,author,pages,read))
populateTile(new Book(title,author,pages,read))
modalBackground.classList.add('hidden');
})




function bookTileRender(){
//var tiles = document.getElementsByClassName("bookTile")
//while(tiles[0]){
  //tiles[0].parentNode.removeChild(tiles[0])
//}

}

function populateTile(book){
  //TODO Title, Author, Pages, Read, Remove
  const bookTile = document.createElement("div")
  bookTile.classList.add("bookTile")

  const title = document.createElement("div")
  title.classList.add("title")
  title.textContent = book.title
  
  const author = document.createElement("div")
  author.classList.add("author")
  author.textContent = book.author

  const pages = document.createElement("div")
  pages.classList.add("pages")
  pages.textContent = book.pages

  const read = document.createElement("div")
  read.classList.add("read")
  read.textContent = "Read"

  const remove = document.createElement("div")
  remove.classList.add("remove")
  remove.textContent = "Remove"

  bookTile.appendChild(title)
  bookTile.appendChild(author)
  bookTile.appendChild(pages)
  bookTile.appendChild(read)
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
