# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/pszponder/fem-pod-request-access-landing-page](https://github.com/pszponder/fem-pod-request-access-landing-page)
- Live Site URL: [https://pszponder.github.io/fem-pod-request-access-landing-page/](https://pszponder.github.io/fem-pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned to use a pseudo-element to insert a transparent background color to make an image appear darker. More information can be found from the CoderCoder article attached in the references.

```css
/* Add pseudo-element overlay */
body::before {
  content: "";
  position: absolute;

  /*
  Prevent Image from Collapsing

  Since we didn't declare a width and height,
  setting all position directions to 0 causes the
  background color to stretch and fill the entire parent element
   */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Use the opacity built into hsla to create the semi-transparent layer */
  background-color: hsla(224deg, 35%, 11%, 0.93);
}
```

### Continued development

I would like implement a backend to this app in the future. It would be a great learning experience to try to actually implement the intended functionality of the website using the various APIs from Spotify, Apple Podcast, Google Podcasts and Pocket Casts. This would require backend and API knowledge which I am in the process of learning.

### Useful resources

- [CoderCoder - How to change background-image opacity in CSS without affectiong text | HTML/CSS](https://coder-coder.com/background-image-opacity/) - I used this resource to learn how to apply a transparent layer onto my background Image. CoderCoder is a great resource in general for web development and I highly reccommend checking her blog and her youtube channel.

## Author

- GitHub - [@pszponder](https://github.com/pszponder)
- Frontend Mentor - [@pszponder](https://www.frontendmentor.io/profile/pszponder)
- Twitter - [@PSzponder](https://twitter.com/PSzponder)
