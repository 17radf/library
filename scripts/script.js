// initiate empty array for storing books and book constructor
let library = []
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead 
}

// functions for adding books to library and delete
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    const newArray = library.push(newBook)
    library.concat(newArray)
}

function deleteBook(index) {
    library.splice(index, 1)
    display()
}

function readBook(index) {
    library[index].isRead = !library[index].isRead
    display()
}

// queries selector
const container = document.querySelector(".container")
const containerBook = document.querySelector(".containerBooks")
const btnSub = document.querySelector("#btnSubmit")
const div = document.createElement('div')

// function for displaying books dom
function display() {
    containerBook.innerHTML = ""
    for(let i = 0; i < library.length; i++){
        const divider = document.createElement('div')
        const header = document.createElement('h3')
        const title = document.createElement('span')
        const author = document.createElement('span')
        const pages = document.createElement('span')
        const delBtn = document.createElement('button')
        const readBtn = document.createElement('button')

        header.textContent = `Book ${i + 1}`
        title.textContent = `${library[i].title} `
        author.textContent = `by ${library[i].author} `
        pages.textContent = `with ${library[i].pages} pages `
        readBtn.textContent = `${library[i].isRead ? "read" : "not read"}`
        delBtn.textContent = `delete`

        delBtn.addEventListener("click", () => { deleteBook(i) })
        readBtn.addEventListener("click", () => { readBook(i) })

        readBtn.classList.add('btn-book')
        delBtn.classList.add('btn-book')

        containerBook.appendChild(divider)
        divider.appendChild(header)
        divider.appendChild(title)
        divider.appendChild(author)
        divider.appendChild(pages)
        divider.appendChild(readBtn)
        divider.appendChild(delBtn)
    }
    return;
}

// button for submit
btnSub.addEventListener("click", () => {
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const isRead = document.querySelector("#isRead").value
    title && author && pages && isRead ? addBookToLibrary(title, author, JSON.parse(pages), JSON.parse(isRead)) : alert("isi semua dong") 
    display()
})

// call display function
display()