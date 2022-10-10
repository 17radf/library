// initialize library variable
let library = []

// book's object pake class
class Book {

  constructor(title, author, pages, read) {
    this.id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36);
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

}

const bookFun = {
  isRead: (id) => {
    const lib = library.find(e => e.id == id)
    return lib.read ? "✅" : "❌"
  },
  setRead: (id) => {
    const lib = library.findIndex(e => e.id == id)
    library[lib].read = !library[lib].read
    bookFun.saveAndDisplayBoth()
  },
  addBookToLibrary: (title, author, pages, read) => {
    const newBook = new Book(title, author, pages, read)
    library.push(newBook)
  },
  deleteBook: (id) => {
    const lib = library.findIndex(e => e.id == id)
    library.splice(lib, 1)
    bookFun.saveAndDisplayBoth()
  },
  saveAndDisplayBoth() {
    saveLib()
    display('div.books', true)
    display('div.fbooks', false)
  }

}

// function to display any books (it loops everything in variable => library)
// className buat class yg dituju (fungsinya dipake soalnya ada 2 rak buku)
// state itu maksudnya read statenya t/f (will change later hehe)
// searchnya default ke "" atau gada
function display(className, state, search = "") {

  const books = document.querySelector(`${className}`)
  books.innerHTML = null

  // filter library pake state tadi
  let lib = library.filter(e => e.read == state)

  // filter library pake state + search (kalo ada)
  if (search != "") lib = library.filter(e => e.read == state && e.title.toLowerCase().indexOf(search.toLowerCase()) > -1)

  // kalo isi libnya ga kosong jalanin, kalo engga ya masuk ke elsenya (tidak ada)
  if (lib.length != 0) {
    for (let i = 0; i < lib.length; i++) {

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

      title.textContent = `${lib[i].title} ${bookFun.isRead(lib[i].id)}`
      author.textContent = `by ${lib[i].author}, ${lib[i].pages} pages`
      delBtn.textContent = `DELETE`
      readBtn.textContent = `${lib[i].read ? "READ?" : "NOT READ?"}`

      // more advanced contents
      delBtn.addEventListener("click", () => bookFun.deleteBook(lib[i].id))
      readBtn.addEventListener("click", () => bookFun.setRead(lib[i].id))

      // apply it
      container.appendChild(title)
      container.appendChild(author)
      container.appendChild(divBtn)
      divBtn.appendChild(delBtn)
      divBtn.appendChild(readBtn)
      books.appendChild(container)

    }
  } else {
    const container = document.createElement("div")
    const title = document.createElement("h3")
    title.textContent = "Tidak ada."
    container.appendChild(title)
    books.appendChild(container)
  }
}

const submit = document.querySelector("#btn-submit")
submit.addEventListener("click", (e) => {
  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const isRead = document.querySelector("#isRead").checked
  title && pages && author ? bookFun.addBookToLibrary(title, author, pages, isRead) : alert("Yang lengkap dong maz")
  bookFun.saveAndDisplayBoth()
})

// buttons
const showBtn = document.querySelector("#btn-show")
showBtn.addEventListener("click", () => toggleForm())

const backBtn = document.querySelector("#btn-back")
backBtn.addEventListener("click", () => toggleForm())

const toggleForm = () => {
  const formSection = document.querySelector(".form")
  formSection.classList.toggle("disable")
  showBtn.classList.toggle("disable")
}

const butSearch = document.querySelector("#btn-search")
const inSearch = document.querySelector("#search")
inSearch.addEventListener("change", (e) => { search() })
butSearch.addEventListener("click", (e) => { search() })
function search() {
  const title = document.querySelector("#search").value
  display('div.books', true, title)
  display('div.fbooks', false, title)
  console.log(title)
}

// localStorage stuff ngab
function saveLib() {
  localStorage.setItem("library", JSON.stringify(library))
}

function populateStorage() {
  if (localStorage.getItem("library") !== null) {
    library = JSON.parse(localStorage.getItem("library"))
  } else {
    bookFun.addBookToLibrary("Run Riot (Remaster for 星の消えた夜に 2022)", "Aimer", 132, true)
    bookFun.addBookToLibrary("Cara Jitu Menyindir", "Dian", 20, false)
    bookFun.addBookToLibrary("The Man", "Not Raihan", 10, false)
  }
}

populateStorage()
bookFun.saveAndDisplayBoth()