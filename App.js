let index = 0;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index++;
};


let myLibrary = [new Book('Matilda', 'Roald Dahl', 100, false)];
// console.log(myLibrary);

const library = document.querySelector('.library');

function displayBook(b){

    console.log(b.read);
    const book = document.createElement('div');
    const deleteBook = document.createElement('div');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const bottom = document.createElement('div');
    const checkbox = document.createElement('input')
    const pages = document.createElement('div');
    
    book.classList.add('book');
    deleteBook.textContent = 'x';
    deleteBook.classList.add('delete')
    author.textContent = b.author;
    author.classList.add('author');
    title.textContent = b.title;
    title.classList.add('title');
    checkbox.type = 'checkbox';
    checkbox.checked = b.read;
    pages.textContent = b.pages + (b.pages && ' pages');
    pages.classList.add('pages');
    bottom.classList.add('bottom');

    bottom.appendChild(checkbox);
    bottom.appendChild(pages);
    book.appendChild(deleteBook);
    book.appendChild(title);
    book.appendChild(author);
    book.append(bottom);
    library.appendChild(book);

    deleteBook.addEventListener('click', () => {
        library.removeChild(book);
        myLibrary.splice(myLibrary.indexOf(myLibrary.filter(a => a.index === b.index)[0]), 1);
        console.log(myLibrary);
    })

};

function addBookToLibrary(b){
    myLibrary = [...myLibrary, b];
    displayBook(b);
};

myLibrary.forEach(b => {
    displayBook(b);
});

const addBtn = document.querySelector('.add');
const formContainer = document.querySelector('.form');
const newBookForm = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const cancelBtn = document.querySelector('.cancel');


newBookForm.addEventListener('submit', (e) => {
    // console.log(isRead.checked);
    e.preventDefault();
    addBookToLibrary(new Book(title.value, author.value, pages.value, isRead.checked));
    title.textContent = '';
    author.textContent = '';
    pages.textContent = '';
    formContainer.style.display = 'none';
})

addBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
})

cancelBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
})