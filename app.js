
// GLOBAL VARIABLES
let library = [];
let placeHolder = new Book("Example", "Jeff Stanley", "234", "Not Read Yet");
let placeHolder2 = new Book("Another Example", "Jeff Stanley", "2342", "Read");

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

let colAuthor = document.createElement('div');
colAuthor.textContent = "Author";
colAuthor.style.gridRow = "1";
colAuthor.style.gridColumn = "2";
booksContainer.appendChild(colAuthor);

let colTitle = document.createElement('div');
colTitle.textContent = "Title";
colTitle.style.gridRow = "1";
colTitle.style.gridColumn = "5" 
booksContainer.appendChild(colTitle);

let colPageCount = document.createElement('div');
colPageCount.textContent = 'PageCount:'
colPageCount.style.gridRow = '1'
colPageCount.style.gridColumn = '8'
booksContainer.appendChild(colPageCount)

let colStatus = document.createElement('div');
colStatus.textContent = 'Status';
colStatus.style.gridRow = '1';
colStatus.style.gridColumn = '12'
booksContainer.appendChild(colStatus)


function Book(name, author, pages, status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary(book){
    library.push(book);
}



addBookToLibrary(placeHolder);
addBookToLibrary(placeHolder2);
addBookToLibrary(placeHolder2);
addBookToLibrary(placeHolder2);
addBookToLibrary(placeHolder2);
addBookToLibrary(placeHolder2);
addBookToLibrary(placeHolder2);

library.forEach(bookTitle => {
    let newBook = document.createElement('div');
    newBook.className = 'book';
    newBook.id = `book-${bookNum++}`;
    newBook.style.gridRow = rowStart++;
    newBook.style.gridColumn = '2 / 17'; // Span full width of booksContainer
    newBook.style.display = 'grid';
    newBook.style.gridTemplateColumns = 'repeat(16, 1fr)'; // 16 columns within each book


    let author = document.createElement('div');
    author.className = 'author';
    author.id = `author-${authorId++}`;
    author.textContent = bookTitle.author;
    author.style.gridColumn = '1 / 4'; // Span columns 1 to 3   
    author.style.gridRow = '1'
    
    let title = document.createElement('div');
    title.className = 'title';
    title.id = `title-${titleId++}`;
    title.textContent = bookTitle.name;
    title.style.gridColumn = '4 / 8'; // Span columns 4 to 7
    author.style.gridRow = '1'
    
    let pageCount = document.createElement('div');
    pageCount.className = 'page-count';
    pageCount.id = `page-count-${pageCountId++}`;
    pageCount.textContent = bookTitle.pages;
    pageCount.style.gridColumn = '8 / 12'; // Span columns 8 to 11
    author.style.gridRow = '1'
    
    let status = document.createElement('div');
    status.className = 'status';
    status.id = `status-${statusId++}`;
    status.textContent = bookTitle.status;
    status.style.gridColumn = '12 / 16'; // Span columns 12 to 15
    author.style.gridRow = '1'

    let removeBookBtn = document.createElement('button');
    removeBookBtn.id = `Btn-${removeBookBtnId++}`;
    removeBookBtn.className = 'removeButton';
    removeBookBtn.textContent = "Remove Book";
    removeBookBtn.style.gridColumn = '16 / 17'; // Span the last column
    removeBookBtn.onclick = () => newBook.remove(); // Add functionality to remove book
    

    booksContainer.appendChild(newBook);
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pageCount);
    newBook.appendChild(status);
    newBook.appendChild(removeBookBtn);
});


const addBookBtn = document.querySelector('#add-new-book');
const addBookForm = document.querySelector('#addBookForm');
const submitBookBtn = document.querySelector('#submitBookBtn');

addBookBtn.addEventListener('click', () => {
    addBookForm.style.display = 'block';
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
