const bookShelf = document.querySelector(".book-shelf");
const addBook = document.querySelector(".add-book");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "read");

addBookToLibrary(theHobbit);

for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookShelf.appendChild(bookCard);

    let title = document.createElement("p");
    title.textContent = myLibrary[i].title;
    title.classList.add("bold");
    let author = document.createElement("p");
    author.textContent = myLibrary[i].author;
    author.classList.add("bold");
    let pages = document.createElement("p");
    pages.textContent = myLibrary[i].pages + " pages";
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove"
    let readButton = document.createElement("button");
    if (myLibrary[i].read === "read") {
        readButton.classList.add("read");
        readButton.textContent = "Read"
    }
    else {
        readButton.classList.add("not-read");
        readButton.textContent = "Not read"
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
}




