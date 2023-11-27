const myLibrary = [];



function Book(name,author,pages,status){
    //the constructor
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.status = status;

}


function addBookToLibrary(name,author,pages,statusBook){
        myLibrary[myLibrary.length] = new Book(name,author,pages,statusBook)
    }
