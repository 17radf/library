// initialize library variable
let library = []

// book's object
class Book {

  constructor(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  isRead(){
    return this.read ? "✅" : "❌"
  }

}

Book.prototype.setRead = function() {
  this.read = !this.read
  display()
}

// function to add book to library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  library.push(newBook)
}

function deleteBook(index) {
  library.splice(index, 1)
  display()
}

// function to display any books (it loops everything in variable => library)
function display() {

  const books = document.querySelector("div.books")
  books.innerHTML = null

  for(let i = 0; i < library.length; i++) {
    // declare variables to create
    const container = document.createElement("div")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const divBtn = document.createElement("div")
    const delBtn = document.createElement("button")
    const readBtn = document.createElement("button")

    // umm... the contents
    container.classList.add("book")
    divBtn.classList.add("div-btn")

    title.textContent = `${library[i].title} ${library[i].isRead()}`
    author.textContent = `by ${library[i].author}, ${library[i].pages} pages`
    delBtn.textContent = `DELETE`
    readBtn.textContent = `READ`

    // more advanced contents
    delBtn.addEventListener("click", () => deleteBook(i))
    readBtn.addEventListener("click", () => library[i].setRead())

    // apply it
    container.appendChild(title)
    container.appendChild(author)
    container.appendChild(divBtn)
    divBtn.appendChild(delBtn)
    divBtn.appendChild(readBtn)
    books.appendChild(container)

  }
}

const submit = document.querySelector("#btn-submit")
submit.addEventListener("click", (e) => {
  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const isRead = document.querySelector("#isRead").checked
  console.log(title, pages, author, isRead)
  title && pages && author ? addBookToLibrary(title, author, pages, isRead) : alert("Yang lengkap dong mz")
  display()
})

const showBtn = document.querySelector("#btn-show")
showBtn.addEventListener("click", () => toggleForm())

const backBtn = document.querySelector("#btn-back")
backBtn.addEventListener("click", () => toggleForm())

const toggleForm = () => {
  const formSection = document.querySelector(".form")
  formSection.classList.toggle("disable")
  showBtn.classList.toggle("disable")
}

addBookToLibrary("Tutorial Ngamuk di Depan Murid", "Gandi", 69, true)
addBookToLibrary("Cara Jitu Menyindir", "Dian", 20, false)
addBookToLibrary("The Man", "Not Raihan", 10, false)

display()