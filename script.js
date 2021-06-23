function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.ingfo = function() {
        read = isRead ? "already read" : "not read yet"
        console.log(`${title} by ${author}, ${pages} pages, ${read}`)
    }
}

const Hobbits = new Book("The Hobbits", "J.R.R. Tolkien", 295, false)
Hobbits.ingfo()

// this is for prototype (training)

let gandi = {
    ngamok: true,
    action(){
        alert("curahdami jauh lur")
    }
}

let dian = {
    nyindir: true,
    __proto__: gandi
}

let abdi = {
    gatau: "jirrr",
    __proto__: dian
}

console.log(dian.ngamok)
abdi.action()

// prototype again

function Guru(name, mapel) {
    this.name = name
    this.mapel = mapel
}
Guru.prototype.sayName = function () {
    console.log(this.name)
}
Guru.prototype.goToHell = function() {
    let areThey = this.name == "gandi" ? "i hope u really go to hell" : "wish you luck"
    console.log(areThey)
}

let gandiNew = new Guru("gandi", "agama")
gandiNew.sayName()
gandiNew.goToHell()

function Satpam(){
    this.sayFuckYou = function(){
        console.log(`fuck you`)
    }
}

Satpam.prototype = Object.create(Guru.prototype)
const abdiNew = new Satpam()
abdiNew.sayFuckYou()

function KepSek(){

}
KepSek.prototype = Object.create(Satpam.prototype)
KepSek.prototype.sayFuckYou = function(){
    console.log("awkoawkaowkaokw")
}
const hamka = new KepSek()
hamka.sayFuckYou()