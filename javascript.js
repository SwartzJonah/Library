//Starter State
const library = document.querySelector('#library');
const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');
const bookPopup = document.querySelector('#bookPopup');
const bookForm = document.querySelector('#bookForm')

let myLibrary = [];
let bookIndex = 0;
let bookToAdd;
let newTitle;
let newAuthor;
let newPages;
let newRead;

class Book{
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = myLibrary.length;
    }
}

addBookBtn.addEventListener('click', () => bookPopup.style.display ='table');
submitBtn.addEventListener('click', addBookToLibrary);


// Functions
function addBookToLibrary() {
    event.preventDefault();
    bookPopup.style.display ='none';
    newTitle = bookForm.title.value;
    newAuthor = bookForm.author.value;
    newPages = bookForm.pages.value;
    newRead = bookForm.read.checked;
    bookToAdd = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(bookToAdd);
    console.log(bookToAdd.index);
    displayBooks();
    bookForm.reset();
}

function displayBooks() {
    deleteBooks();
    for (i=0; i<myLibrary.length; i++){
        const displayBook = document.createElement('div');
        const displayTitle = document.createElement('div');
        const displayAuthor = document.createElement('div');
        const displayPages = document.createElement('div');
        const displayRead = document.createElement('div');
        
        displayBook.setAttribute('spot', myLibrary.indexOf[i]);
        displayTitle.textContent = myLibrary[i].title;
        displayAuthor.textContent = myLibrary[i].author;
        displayPages.textContent = myLibrary[i].pages;
        displayRead.textContent = myLibrary[i].read;
        const displayIndex = myLibrary[i].index;
        console.log(myLibrary[i].index)
        console.log(displayIndex)

        
        displayBook.appendChild(displayTitle);
        displayBook.appendChild(displayAuthor);
        displayBook.appendChild(displayPages);
        displayBook.appendChild(displayRead);

        const removeBtn = document.createElement('button');
        console.log(myLibrary[i]);
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(displayIndex, 1);
            displayBooks();
        })
        removeBtn.textContent= "Remove Book";
        displayBook.appendChild(removeBtn);

        const readButton = document.createElement('button');
        readButton.addEventListener('click', () => {
            if (myLibrary[displayIndex].read === true) {
                myLibrary[displayIndex].read = false;
            } else {
                myLibrary[displayIndex].read = true;
            }
            displayBooks();
        })
        readButton.textContent= "Read";
        displayBook.appendChild(readButton);

        library.appendChild(displayBook);
    }
}

function deleteBooks(){
    const bookGrid = library.querySelectorAll('div');
    const buttons = library.querySelectorAll('button');
    bookGrid.forEach(div => {
        div.remove();
    })
    buttons.forEach(button => {
        button.remove();
    })
}

