# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Mobile View](./design/mobile-design.jpg)

![Desktop View](./design/desktop-design.jpg)

### Links

- Solution URL: [https://github.com/codewithmishra-ashish/frontend-mentor-challenge](https://github.com/codewithmishra-ashish/frontend-mentor-challenge)
- Live Site URL: [https://codewithmishra-ashish.github.io/frontend-mentor-challenge/](https://codewithmishra-ashish.github.io/frontend-mentor-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (for dropdown toggle functionality)

### What I learned

While working on this project, I gained a deeper understanding of responsive navigation design. Key learnings include:

- **Hover and Toggle States**: I learned how to implement hover effects for dropdown arrows using CSS and toggle dropdowns with JavaScript, ensuring independent behavior for "Features" and "Company" using specific classes.
  ```css
  .features-expandable:hover span .down-arrow {
    display: none;
  }
  .features-expandable:hover span .up-arrow {
    display: inline;
  }


### Continued development

I plan to focus on the following areas in future projects:

- Enhancing JavaScript interactivity with event delegation for better scalability.
- Exploring CSS animations to improve the sidebar slide-in effect.
- Deepening my understanding of accessibility (e.g., ARIA labels for dropdowns).

### Useful resources

- [W3Schools](https://www.w3schools.com/) - Helped me with the basics of HTML, CSS, and JavaScript.
- [CSS-Tricks](https://css-tricks.com/) - Provided insights into Flexbox and Grid layouts.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Useful for understanding CSS positioning and JavaScript DOM manipulation.


## Author

- Website - [Ashish Mishra](https://mishrashish.com.np/)
- Linkedin - [@ashish-mishra-54419231a](https://www.linkedin.com/in/ashish-mishra-54419231a/)


