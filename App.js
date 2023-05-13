let myLibrary = [{title: 'Matilda', author: 'Roald Dahl', pages: 100, read: false}];

const library = document.querySelector('.library');

function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
    // this.read = read;
};

function displayBook(b){
    const book = document.createElement('div');
    const deleteBook = document.createElement('div');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const pages = document.createElement('div');
    // const read = document.createElement('div')
    
    book.classList.add('book');
    deleteBook.textContent = 'x';
    deleteBook.classList.add('delete')
    author.textContent = b.author;
    author.classList.add('author');
    title.textContent = b.title;
    title.classList.add('title');
    pages.textContent = b.pages + (b.pages && ' pages');
    pages.classList.add('pages');
    book.appendChild(deleteBook);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    library.appendChild(book);

    deleteBook.addEventListener('click', () => {
        library.removeChild(book);
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
const cancelBtn = document.querySelector('.cancel');


newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary({title: title.value, author:author.value, pages: pages.value});
    formContainer.style.display = 'none';
})

addBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
})

cancelBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
})