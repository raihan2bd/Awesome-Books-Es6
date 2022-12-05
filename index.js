import BookLibrary from './module/bookLibrary.js';
import { navItems } from './module/domSlectors.js';
import addNavSection from './module/navigation.js';

// show Date in html
const dt = luxon.DateTime.now(); // eslint-disable-line
document.getElementById('show-date').innerText = dt.toLocaleString(luxon.DateTime.DATETIME_MED); // eslint-disable-line

// Initialize the ManageBooks constructor
const books = new BookLibrary();

// Load books data on the fly
window.onload = () => {
  books.display();
};

// Add event listner on the form
const addBookForm = document.getElementById('add-book');
addBookForm.addEventListener('submit', (e) => {
  books.onAddBook(e);
});

// Single page behabiour using navigation bar.
navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    navItems.forEach((n) => {
      n.classList.remove('active');
    });
    addNavSection(e);
  });
});
