import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js ';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

if (module.hot) {
  module.hot.accept();
}

// Create a new instance 
let mobileMenu = new MobileMenu();

// Create a new instance
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let stickyHeader = new StickyHeader();





