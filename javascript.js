//Starter State
const library = document.querySelector('.library');
const addBookBtn = document.querySelector('#addBookBtn');
let myLibrary = [];
let bookIndex = 0;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = bookIndex;
}


function addBookToLibrary(book) {
    myLibrary.push(book);
    bookIndex++;
}

function displayBooks() {
    for (i=0; i>=myLibrary.length; i++){
        let bookCard =document.createElement('div');
        library.appendChild(bookCard);
        bookCard = myLibrary[i];
    }
}


function removeBook(){

}
function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

  function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

addBookBtn.addEventListener('click',  openForm())
    
