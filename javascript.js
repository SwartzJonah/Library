//Starter State
const library = document.querySelector('#library');
const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');
const bookPopup = document.querySelector('#bookPopup');
// const bookForm = document.querySelector('#bookForm')
let myLibrary = [];
let bookIndex = 0;
let bookToAdd;

class Book{
    constructor (title, author, pages, read) {
        this.title = bookForm.title.value;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

addBookBtn.addEventListener('click', () => bookPopup.style.display ='block');
submitBtn.addEventListener('click', addBookToLibrary);


// Functions
function addBookToLibrary(book) {
    bookPopup.style.display ='block';
    
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
    
