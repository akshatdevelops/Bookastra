function Display() { }
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type

}



Display.prototype.add = function (book) {
    let tableBody = document.getElementById("tableBody")
    let dis = `
    <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>

     </tr>
    
    `
    tableBody.innerHTML += dis
}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset()

}



let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit)

function libraryFormSubmit(e) {

    let name = document.getElementById("bookName").value
    let author = document.getElementById("author").value
    let Thriller = document.getElementById("thriller")
    let Horror = document.getElementById("horror")
    let Finance= document.getElementById("finance")
    let type
    if (Thriller.checked) {
        type = Thriller.value
    }
    else if (Horror.checked) {
        type = Horror.value
    }
    else if (Finance.checked) {
        type = Finance.value
    }

    let book = new Book(name, author, type)
    e.preventDefault()
    let display = new Display()
    display.add(book)
    display.clear()
}