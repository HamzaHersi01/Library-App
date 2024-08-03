
const addBookbtn = document.querySelector(".addBookButton")
const modalBackground = document.querySelector(".addBookModal")
const form = document.querySelector("#bookinfo")
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
})




























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
