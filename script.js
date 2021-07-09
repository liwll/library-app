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
const add = document.querySelector('.add-book');
add.onclick = () => {
    openModal();
};
const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = "block";
}

function addBookToLibrary() {
    const bookshelf = document.querySelector('.books');
}

