function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        let info = `${this.title} by ${this.author}, ${pages} pages, `;
        info += isRead? "have read" : "not read yet";
        return info;
    }
}

let myLibrary = [];
let bookIndex = -1;

const modal = document.querySelector('.modal');
const form = document.querySelector('form');

const newBook = document.querySelector('.new-book');
newBook.onclick = () => {
    modal.style.display = 'block';
};

const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener('click', () => {
    clearFormData();
});
window.onmousedown = (event) => {
    if (event.target == modal) {
        clearFormData();
    }
}

const submitForm = document.querySelector('.submit');
submitForm.addEventListener('click', () => {
    if (validateForm()) {
        addBookToLibrary();
        clearFormData();
    }
});

const errTitle = document.querySelector('.err-title');
const errAuthor = document.querySelector('.err-author');
const errPages = document.querySelector('.err-pages');
function validateForm() {
    if (form.title.value === ''
    || form.author.value === ''
    || form.pages.value === '') {
        errTitle.style.display = (form.title.value === '') 
            ? 'block' : 'none';
        errAuthor.style.display = (form.author.value === '') 
            ? 'block' : 'none';
        errPages.style.display = (form.pages.value === '') 
            ? 'block' : 'none';
        return false;
    } else {
        return true;
    }
}

function clearFormData() {
    form.title.value = '';
    form.author.value = '';
    form.pages.value = '';
    form.isRead.checked = false;
    errTitle.style.display = 'none';
    errAuthor.style.display = 'none';
    errPages.style.display = 'none';
    modal.style.display = 'none';
}

function addBookToLibrary() {
    const books = document.querySelector('.books');

    let book = new Book(form.title.value, form.author.value, form.pages.value, form.isRead.checked);
    myLibrary.push(book);
    bookIndex++;

    book = myLibrary[bookIndex];
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book');
    bookInfo.textContent = book.info();
    books.appendChild(bookInfo);
}
