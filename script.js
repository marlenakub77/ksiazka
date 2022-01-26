class Book {

  constructor(title, author, readed) {
    this.title = title;
    this.author = author;
    this.readed = readed;
  }

  opiszKsiazke() {
    if(this.readed) {
      return `Ksiażka ma tytuł ${this.title} autorem jest ${this.author} i została przeczytana`;
    } 
    else {
      return `Ksiażka ma tytuł ${this.title} autorem jest ${this.author} i nie została przeczytana`;
    }
  }
}

let wiedzmin = new Book('Wiedźmin', 'Andrzej Sapkowski', true);
let wladcaMuch = new Book('Władca Much', 'William Golding', false);
let chamstwo = new Book('Chamstwo', 'Kacper Pobłocki', false);

let books = [wiedzmin, wladcaMuch, chamstwo];


function iloscPrzeczytanych(booksArray) {
  
  let readedBooks = 0;

  for(let i=0; i<booksArray.length; i++) {
    if(booksArray[i].readed) {
       readedBooks++;
       console.log(booksArray[i].opiszKsiazke());
    }
  }

  return readedBooks;
}

console.log(iloscPrzeczytanych(books));