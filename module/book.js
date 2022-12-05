import generateId from './utils.js';

// Book constructor will create a single book.
export default class Book {
  constructor(title, author) {
    this.id = generateId();
    this.title = title;
    this.author = author;
  }
}