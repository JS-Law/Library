// Book Class
class Book {
    constructor(name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

// Library Class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
}

// ColumnElement Class
class ColumnElement {
    constructor(container, textContent, row, column, marginStart = '') {
        this.element = document.createElement('div');
        this.element.textContent = textContent;
        this.element.style.gridRow = row;
        this.element.style.gridColumn = column;
        if (marginStart) {
            this.element.style.marginInlineStart = marginStart;
        }
        container.appendChild(this.element);
    }
}

// BookElement Class
class BookElement {
    constructor(book, bookNum, rowStart) {
        this.book = book;
        this.bookNum = bookNum;
        this.rowStart = rowStart;
        this.createElements();
    }

    createElements() {
        this.newBookElement = document.createElement('div');
        this.newBookElement.className = 'book';
        this.newBookElement.id = `book-${this.bookNum}`;
        this.newBookElement.style.gridRow = this.rowStart;
        this.newBookElement.style.gridColumn = '2 / 17';
        this.newBookElement.style.display = 'grid';
        this.newBookElement.style.gridTemplateColumns = 'repeat(16, 1fr)';

        this.addElement(this.book.name, '5 / 7', 'title');
        this.addElement(this.book.author, '2 / 5', 'author');
        this.addElement(this.book.pages, '9 / 13', 'page-count');
        this.addElement(this.book.status, '13 / 16', 'status');
        this.addRemoveButton();
        this.addIcon();

        document.querySelector('#books').appendChild(this.newBookElement);
    }

    addElement(text, column, className) {
        let element = document.createElement('div');
        element.className = className;
        element.textContent = text;
        element.style.gridColumn = column;
        element.style.gridRow = '1';
        this.newBookElement.appendChild(element);
    }

    addRemoveButton() {
        let removeBookBtn = document.createElement('button');
        removeBookBtn.className = 'removeButton';
        removeBookBtn.textContent = "Remove Book";
        removeBookBtn.style.gridColumn = '16 / 17';
        removeBookBtn.onclick = () => this.newBookElement.remove();
        this.newBookElement.appendChild(removeBookBtn);
    }

    addIcon() {
        let icon = document.createElement('img');
        icon.src = 'assets/images/icons/bookIcon.png';
        icon.alt = 'Book Icon';
        icon.style.gridColumn = '1';
        icon.style.gridRow = '1';
        icon.style.width = '20px';
        this.newBookElement.appendChild(icon);
    }
}

// UI Class
class UI {
    constructor(library) {
        this.library = library;
        this.bookNum = 1;
        this.rowStart = 2;
        this.initialize();
    }

    initialize() {
        document.querySelector('#add-new-book').addEventListener('click', () => {
            document.querySelector('#addBookForm').style.display = 'flex';
        });

        document.querySelector('#submitBookBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.addNewBook();
        });

        // Add initial placeholder book
        this.library.addBook(new Book("Example", "Jeff Stanley", "234", "Not Read Yet"));
        this.displayBooks();
    }

    addNewBook() {
        const bookTitle = document.querySelector('#bookTitle').value;
        const bookAuthor = document.querySelector('#bookAuthor').value;
        const bookPages = document.querySelector('#bookPages').value;
        const bookStatus = document.querySelector('#bookStatus').value;

        if (bookTitle && bookAuthor && bookPages && bookStatus) {
            let newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
            this.library.addBook(newBook);
            new BookElement(newBook, this.bookNum++, this.rowStart++);

            // Clear the form
            document.querySelector('#bookTitle').value = '';
            document.querySelector('#bookAuthor').value = '';
            document.querySelector('#bookPages').value = '';
            document.querySelector('#bookStatus').value = '';
            document.querySelector('#addBookForm').style.display = 'none';
        } else {
            alert('Please fill in all fields');
        }
    }

    displayBooks() {
        this.library.books.forEach(book => {
            new BookElement(book, this.bookNum++, this.rowStart++);
        });
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const library = new Library();
    new UI(library);
});
