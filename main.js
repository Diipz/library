const bookShelf = document.querySelector(".book-shelf");
const openModal = document.querySelector("#modal-button");
const modalBg = document.querySelector(".modal-bg")
const modalActive = document.querySelector(".modal-active");
const modalClose = document.querySelector(".modal-close");
const submitBook = document.querySelector("#submitBtn");
const nameInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    createLibrary();
}

function createLibrary() {
    let newNode = document.querySelector(".book-shelf");
    newNode.textContent = "";


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

        removeButton.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            createLibrary();
        });

        if (myLibrary[i].read === "READ") {
            readButton.classList.add("read");
            readButton.textContent = "Read"
            readButton.addEventListener("click", () => {
                readButton.classList.toggle("red");
                if (readButton.textContent === "Read") {
                    readButton.textContent = "Not read"
                }
                else {
                    readButton.textContent = "Read"
                }
            });
        }
        else {
            readButton.classList.add("read");
            readButton.classList.add("red");
            readButton.textContent = "Not read"
            readButton.addEventListener("click", () => {
                readButton.classList.toggle("red");
                if (readButton.textContent === "Not read") {
                    readButton.textContent = "Read"
                }
                else {
                    readButton.textContent = "Not read"
                }
            });
        }

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readButton);
        bookCard.appendChild(removeButton);
    }
}


modalClose.addEventListener("click", () => {
    modalBg.classList.remove("modal-bg-active");
});

openModal.addEventListener("click", () => {
    modalBg.classList.add("modal-bg-active");
});

submitBook.addEventListener("click", function () {

    if (!nameInput.checkValidity() || !authorInput.checkValidity() || !pagesInput.checkValidity()) {
        return;
    }



    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let checkbox = document.getElementById("isRead");

    if (checkbox.checked) {
        var read = "READ";
    }
    else {
        var read = "not read";
    }

    addBookToLibrary(title, author, pages, read);
    document.getElementById("add-book-modal").reset();
    modalBg.classList.remove("modal-bg-active");
});


//contraint validation API for add book modal

nameInput.addEventListener("input", () => {
    nameInput.setCustomValidity("");
    nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
    if (nameInput.value === "") {
        nameInput.setCustomValidity("Enter title of book");
    }
});

authorInput.addEventListener("input", () => {
    authorInput.setCustomValidity("");
    authorInput.checkValidity();
});

authorInput.addEventListener("invalid", () => {
    if (authorInput.value === "") {
        authorInput.setCustomValidity("Enter author of book");
    }
});

pagesInput.addEventListener("input", () => {
    pagesInput.setCustomValidity("");
    pagesInput.checkValidity();
});

pagesInput.addEventListener("invalid", () => {
    if (pagesInput.value == 0) {
        pagesInput.setCustomValidity("A book with no pages??");
    }
    else if (nameInput.value.length > 9999) {
        pagesInput.setCustomValidity("Enter a number less than 9999");
    }
    else {
        pagesInput.setCustomValidity("Enter a number from 1-9999");
    }
});




