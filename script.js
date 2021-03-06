function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        let info = `${this.title} by ${this.author}, ${pages} pages`;
        return info;
    }
}

let myLibrary = [];
let bookIndex = -1;

const modal = document.querySelector('.modal');
const form = document.querySelector('form');
const books = document.querySelector('.books');

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

function removeBook(index) {
    const target = document.querySelectorAll(`[data-index='${index}']`);
    if (index > -1) {
        myLibrary.splice(index, 1);
    }
    bookIndex--;
    books.removeChild(target[0]);
}

function addBookToLibrary() {
    let book = new Book(form.title.value, form.author.value, form.pages.value, form.isRead.checked);
    myLibrary.push(book);
    bookIndex++;

    book = myLibrary[bookIndex];
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book');
    bookInfo.textContent = book.info();
    bookInfo.dataset.index = bookIndex;

    //allows toggling of "read" status
    const toggleRead = document.createElement('button');
    toggleRead.classList.add('btn-tgl-read');
    toggleRead.textContent = "Not Completed";
    toggleRead.addEventListener('click', () => {
        toggleRead.textContent = toggleRead.textContent === "Completed"
            ? "Not Completed" : "Completed";
    });
    bookInfo.appendChild(toggleRead);

    //allows removal of books
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn-remove');
    removeBtn.textContent = 'x';
    removeBtn.addEventListener('click', () => {
        removeBook(bookInfo.dataset.index);
    });
    bookInfo.appendChild(removeBtn);

    books.appendChild(bookInfo);
}
