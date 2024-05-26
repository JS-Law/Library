let library = []

function Book(name, author, pages, status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let placeHolder = new Book("Example", "Jeff Stanley", "234", "Not Read Yet")
let placeHolder2 = new Book("Another Example", "Jeff Stanley", "2342", "Read")

function addBookToLibrary(book){
    library.push(book)
}
let booksContainer = document.querySelector('#books');


addBookToLibrary(placeHolder)
addBookToLibrary(placeHolder2)

library.forEach(bookTitle => {
    let newBook = document.createElement('div');
    newBook.className = 'book';
    
    let author = document.createElement('div')
    author.className = 'author';
    author.textContent = `Author: ${bookTitle.name}`;
    
    let title = document.createElement('div')
    title.className = 'title';
    title.textContent = `Title: ${bookTitle.name}`;
    

    let pageCount = document.createElement('div')
    pageCount.className = 'page-count';
    pageCount.textContent = `Page count: ${bookTitle.pages}`;

    let status = document.createElement('div')
    status.className = 'status';
    status.textContent = `Status: ${bookTitle.status}`;

    booksContainer.appendChild(newBook)
    newBook.appendChild(title)
    newBook.appendChild(author)
    newBook.appendChild(pageCount)
    newBook.appendChild(status)
    
    
});
