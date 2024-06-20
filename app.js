class Book {
    constructor(name, author, pages, status){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

class ColumnElement{
    constructor(container, textContent, row, column, marginStart) {
        this.element = document.createElement('div');
        this.element.textContent = textContent;
        this.element.style.gridRow = row;
        this.element.style.gridColumn = column;
        this.element.style.marginInlineStart = marginStart;
        container.appendChild(this.element)
    }
}
// GLOBAL VARIABLES
let library = [];
let placeHolder = new Book("Example", "Jeff Stanley", "234", "Not Read Yet");
let placeHolder2 = new Book("Another Example", "Jeff Stanley", "2342", "Read");

// Need to find a way to increment these to inclue private variables
// Increment function(?)
// Increment function and then store in variable
// Probably need to test in separate file


let bookNum = 1;;
let authorId = 1;
let titleId = 1;
let pageCountId = 1;
let statusId = 1;
let removeBookBtnId = 1

let rowStart = 2;
let colTitleStart = 3;
let colAuthorStart = 6;
let colPageCountStart = 9;
let colStatusStart = 12;


let booksContainer = document.querySelector('#books');
let colAuthor = new ColumnElement(booksContainer, 'Author', '1', '3', '.76rem')
let colTitle = new ColumnElement(booksContainer, 'colTitle', '1', '6')
let colPageCount = new ColumnElement(booksContainer, 'colPageCount', '1', '9')
let colStatus = new ColumnElement(booksContainer, 'colPageCount', '1', '13')


function addBookToLibrary(book){
    library.push(book);
}



addBookToLibrary(placeHolder);

// I can probably bake all of this into the same elementCreation class
// constructor(container, textContent, row, column, marginStart) {
// Create book class
// Create Element methods
// Book, Author, Title, Status, Remove Button, Icon Creation

class newBook {
    constructor(bookTitle, bookNum, rowStart, authorId, titleId, pageCountId, statusId, removeBookBtnId){
        this.bookTitle = bookTitle;
        this.bookNum = bookNum;
        this.rowStart = rowStart;
        this.authorId = authorId;
        this.titleId = titleId;
        this.pageCountId = pageCountId;
        this.statusId = statusId;
        this.removeBookBtnId = removeBookBtnId;
        this.newBook = this.createBookElement();
        this.addElements();
    }

    createBookElement(){
        let newBook = document.createElement('div');
        newBook.className = 'book';
        newBook.id = `book-${this.bookNum}`;
        newBook.style.gridRow = this.rowStart;
        newBook.style.gridColumn = '2 / 17';
        newBook.style.display = 'grid';
        newBook.style.gridTemplateColumns = 'repeat(16, 1fr';
        return newBook;
    }

    createAuthorElement(){
        let author = document.createElement('div');
        author.className = 'author';
        author.id = `author-${this.authorId++}`;
        author.textContent = this.bookTitle.author;
        author.style.gridColumn = '2 / 5';
        author.style.gridRow = '1';
        return author;
    }
    
    createTitleElement(){
        let title = document.createElement('title');
        title.className = 'title';
        title.id = `title-${this.titleId++}`;
        title.textContent = this.bookTitle.name;
        title.style.gridColumn = '5 / 7';
        title.style.gridRow = '1';
        return title;
    }
    createPageCountElement(){
        let pageCount = document.createElement('div');
        pageCount.className = 'page-count';
        pageCount.id = `page-count-${this.pageCountId++}`;
        pageCount.textContent = this.bookTitle.pages;
        pageCount.style.gridColumn = '9 / 13'; // Span columns 8 to 11
        pageCount.style.gridRow = '1'
        return pageCount
    }

    createStatusElement(){
        let status = document.createElement('div');
        status.className = 'status';
        status.id = `status-${this.statusId++}`;
        status.textContent = this.bookTitle.status;
        status.style.gridColumn = '13 / 16'; // Span columns 12 to 15
        status.style.gridRow = '1'
        return status
    }

    createRemoveButton(){
        let removeBookBtn = document.createElement('button');
        removeBookBtn.id = `Btn-${this.removeBookBtnId++}`;
        removeBookBtn.className = 'removeButton';
        removeBookBtn.textContent = "Remove Book";
        removeBookBtn.style.gridColumn = '16 / 17';
        removeBookBtn.onclick = () => this.newBook.remove(); 
    }

    createIconElement(){
        let icon = document.createElement('img');
        icon.src = 'assets/images/icons/bookIcon.png'; 
        icon.alt = 'Book Icon';
        icon.style.gridColumn = '1';
        icon.style.gridRow = '1';
        icon.style.width = '20px'; 
    }

    addElements(){
        this.newBook.appendChild(this.createIconElement());
        this.newBook.appendChild(this.createTitleElement());
        this.newBook.appendChild(this.createAuthorElement());
        this.newBook.appendChild(this.createPageCountElement());
        this.newBook.appendChild(this.createStatusElement());
        this.newBook.appendChild(this.createRemoveButton());
    }

    appendTo(container){
        container.appendChild(this.newBook);
    }
}

library.forEach(bookTitle => {
    let book = new Book(
        bookTitle,
        bookNum++,
        rowStart++,
        authorId++,
        titleId++,
        pageCountId++,
        statusId++,
        removeBookBtnId++
    );
    book.appendTo(booksContainer);
});

const addBookBtn = document.querySelector('#add-new-book');
const addBookForm = document.querySelector('#addBookForm');
const submitBookBtn = document.querySelector('#submitBookBtn');

addBookBtn.addEventListener('click', () => {
    addBookForm.style.display = 'flex';
});

submitBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector('#bookTitle').value;
    const bookAuthor = document.querySelector('#bookAuthor').value;
    const bookPages = document.querySelector('#bookPages').value;
    const bookStatus = document.querySelector('#bookStatus').value;

    if (bookTitle && bookAuthor && bookPages && bookStatus) {
        let newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
        addBookToLibrary(newBook);

        let newBookElement = document.createElement('div');
        newBookElement.className = 'book';
        newBookElement.id = `book-${bookNum++}`;
        newBookElement.style.gridRow = rowStart++;
        newBookElement.style.gridColumn = '2 / 17'; // Span full width of booksContainer
        newBookElement.style.display = 'grid';
        newBookElement.style.gridTemplateColumns = 'repeat(16, 1fr)'; // 16 columns within each book

        let title = document.createElement('div');
        title.className = 'title';
        title.id = `title-${titleId++}`;
        title.textContent = bookTitle;
        title.style.gridColumn = '4 / 8'; // Span columns 4 to 7
        title.style.gridRow = '1';

        let author = document.createElement('div');
        author.className = 'author';
        author.id = `author-${authorId++}`;
        author.textContent = bookAuthor;
        author.style.gridColumn = '1 / 4'; // Span columns 1 to 3   
        author.style.gridRow = '1';

        let pageCount = document.createElement('div');
        pageCount.className = 'page-count';
        pageCount.id = `page-count-${pageCountId++}`;
        pageCount.textContent = bookPages;
        pageCount.style.gridColumn = '8 / 12'; // Span columns 8 to 11
        pageCount.style.gridRow = '1';

        let status = document.createElement('div');
        status.className = 'status';
        status.id = `status-${statusId++}`;
        status.textContent = bookStatus;
        status.style.gridColumn = '12 / 16'; // Span columns 12 to 15
        status.style.gridRow = '1';

        let removeBookBtn = document.createElement('button');
        removeBookBtn.id = `Btn-${removeBookBtnId++}`;
        removeBookBtn.className = 'removeButton';
        removeBookBtn.textContent = "Remove Book";
        removeBookBtn.style.gridColumn = '16 / 17'; // Span the last column
        removeBookBtn.onclick = () => newBookElement.remove(); // Add functionality to remove book

        booksContainer.appendChild(newBookElement);
        newBookElement.appendChild(title);
        newBookElement.appendChild(author);
        newBookElement.appendChild(pageCount);
        newBookElement.appendChild(status);
        newBookElement.appendChild(removeBookBtn);

        // Clear the form
        document.querySelector('#bookTitle').value = '';
        document.querySelector('#bookAuthor').value = '';
        document.querySelector('#bookPages').value = '';
        document.querySelector('#bookStatus').value = '';
        addBookForm.style.display = 'none';
    } else {
        alert('Please fill in all fields');
    }
});
