import { bookSection, addBookSection, contractSection } from './domSlectors.js';

// This function is use for the single page
const addNavSection = (e) => {
  const { id } = e.target;
  e.target.classList.add('active');
  if (id === 'books') {
    bookSection.classList.add('slide-in');
    addBookSection.classList.remove('slide-in');
    contractSection.classList.remove('slide-in');
  } else if (id === 'add-new-book') {
    bookSection.classList.remove('slide-in');
    addBookSection.classList.add('slide-in');
    contractSection.classList.remove('slide-in');
  } else if (id === 'contact-us') {
    bookSection.classList.remove('slide-in');
    addBookSection.classList.remove('slide-in');
    contractSection.classList.add('slide-in');
  }
};

export default addNavSection;