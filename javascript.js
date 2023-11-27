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




const article = document.querySelector(".content")
const dialog = document.querySelector("#askInfoBook");
const showAddBook = document.querySelector(".showAddBook")
const closeAddBook = document.querySelector(".closeAddBook")
const outputBox = document.querySelector("output")
const bookName = dialog.querySelector("#bookName")
const bookAuthor = dialog.querySelector("#bookAuthor")
const bookPages = dialog.querySelector("#bookPages")
const bookStatusUser = dialog.querySelector("#bookStatus")
const confirmBtn = document.querySelector(".confirmBtn")
const content = document.querySelector("article")



showAddBook.addEventListener("click", () => {
    dialog.showModal();
});
closeAddBook.addEventListener("click",() =>{
    dialog.close();
})



let bookAuthorValue = ""
let bookNameValue = ""
let bookPagesValue = "" 
let bookPagesStatus = ""



confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    bookNameValue = bookName.value;
    bookAuthorValue = bookAuthor.value;
    bookPagesValue = bookPages.value;
    bookPagesStatus = "";
    addBookToLibrary(bookNameValue,bookAuthorValue,bookPagesValue,bookPagesStatus);
    dialog.close()
    looping();
});

function looping(){
   
    n = myLibrary.length
    let bookView = document.createElement("div")
    let bookNameForDom = document.createElement("div")
    let bookAuthorForDom = document.createElement("div")
    let bookPagesForDom = document.createElement("div")
    let bookStatusForDom = document.createElement("div")
    bookView.setAttribute("class","cards")
        bookNameForDom.textContent = `Title: ${myLibrary[myLibrary.length-1].bookName}` //not reading the value
        bookAuthorForDom.textContent = `Author:  ${myLibrary[myLibrary.length-1].bookAuthor}`
        bookPagesForDom.textContent = `Pages: ${myLibrary[myLibrary.length-1].bookPages}`
        bookStatusForDom.textContent = `Status:  ${myLibrary[myLibrary.length-1].status}`
        
        bookView.append(bookNameForDom,bookAuthorForDom,bookPagesForDom,bookStatusForDom)
        bookView.dataset.indexNumbers = n   
        article.appendChild(bookView); 
        statBtn = document.createElement("button")
        statBtn.setAttribute("class","statistics") 
        statBtn.textContent = " Change Status"
        statBtn.style.cssText = "border-radius: 6px; width: 100px; height: 25px;"
        removeBtn = document.createElement("button")
        removeBtn.setAttribute("class","remove")
        removeBtn.style.cssText = "border-radius: 6px; width: 100px; height: 25px;"
        removeBtn.textContent = "Remove"
        removeBtn.addEventListener("click",() => {
            bookView.remove();
            index = bookView.dataset.indexNumbers
            myLibrary.splice(index - 1,1)
          
        })


        statBtn.addEventListener("click",() => {
            index = bookView.dataset.indexNumbers
            myLibrary[index - 1].stat()
            bookStatusForDom.textContent = `Status:  ${myLibrary[index-1].status}`
            
         })
         bookView.append(removeBtn);
         bookView.append(statBtn);
        
      
 }
 
 
 Book.prototype.stat = function (){
    if(this.status === "Read" || this.status === "")
    {
        this.status = "Not Read"
        
    }
    else if(this.status === "Not Read"){
        this.status = "Read"
    }
    } 
