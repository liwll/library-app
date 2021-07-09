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
let book = new Book("The Hobbit", "J.r.r tolkien", 295, false);
let myLibrary = [];

const modal = document.querySelector('.modal');
const form = document.querySelector('form');

const newBook = document.querySelector('.new-book');
newBook.onclick = () => {
    modal.style.display = "block";
};
const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
    clearFormData();
});
window.onmousedown = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        clearFormData();
    }
}
const submitForm = document.querySelector('.submit');
submitForm.addEventListener('click', () => {
    addBookToLibrary();
    clearFormData();
});

function clearFormData() {
    form.title.value = '';
    form.author.value = '';
    form.pages.value = '';
    form.isRead.value = 'off';
    modal.style.display = "none";
}

function addBookToLibrary() {
    myLibrary.push({title: form.title.value, author: form.author.value, pages: form.pages.value, isRead: form.isRead.value})
    console.log(myLibrary[0]);
}

