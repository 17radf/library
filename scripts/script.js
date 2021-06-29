// initiate empty array for storing books and book constructor
let library = []
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead ? "already read" : "not read yet lol"
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
        const isRead = document.createElement('span')
        const delBtn = document.createElement('button')
        header.textContent = `Book ${i + 1}`
        title.textContent = `${library[i].title} `
        author.textContent = `by ${library[i].author} `
        pages.textContent = `with ${library[i].pages} pages `
        isRead.textContent = `and ${library[i].isRead} `
        delBtn.textContent = `delete`
        delBtn.addEventListener("click", () => { deleteBook(i) })
        containerBook.appendChild(divider)
        divider.appendChild(header)
        divider.appendChild(title)
        divider.appendChild(author)
        divider.appendChild(pages)
        divider.appendChild(isRead)
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

// prototype learning before

// this is for prototype (training)

// let gandi = {
//     ngamok: true,
//     action(){
//         alert("curahdami jauh lur")
//     }
// }

// let dian = {
//     nyindir: true,
//     __proto__: gandi
// }

// let abdi = {
//     gatau: "jirrr",
//     __proto__: dian
// }

// console.log(dian.ngamok)
// abdi.action()

// // prototype again

// function Guru(name, mapel) {
//     this.name = name
//     this.mapel = mapel
// }
// Guru.prototype.sayName = function () {
//     console.log(this.name)
// }
// Guru.prototype.goToHell = function() {
//     let areThey = this.name == "gandi" ? "i hope u really go to hell" : "wish you luck"
//     console.log(areThey)
// }

// let gandiNew = new Guru("gandi", "agama")
// gandiNew.sayName()
// gandiNew.goToHell()

// function Satpam(){
//     this.sayFuckYou = function(){
//         console.log(`fuck you`)
//     }
// }

// Satpam.prototype = Object.create(Guru.prototype)
// const abdiNew = new Satpam()
// abdiNew.sayFuckYou()

// function KepSek(){

// }
// KepSek.prototype = Object.create(Satpam.prototype)
// KepSek.prototype.sayFuckYou = function(){
//     console.log("awkoawkaowkaokw")
// }
// const hamka = new KepSek()
// hamka.sayFuckYou()