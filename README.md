# Lab - HTML Forms

## Overview

This lab will further help you understand the concepts surrounding HTML Forms.

The Flatburger restaurant wants to add functionality to their website that displays a menu of food to sell to its customers to allow users to add a new food to their website. You will need to use your knowledge of HTML Forms to complete this lab.

## Tools and Resources

It is recommended that you use the Visual Studio Code (VSCode) IDE for this lab.

Useful considerations and terminology:

**HTML Form**: A form for user input that is created by a `<form>` element that consists of opening and closing `<form>` tags that enclose one or more `<input>` elements where users can enter information, and a way to submit the form.

**Event**: Something a user does on a web page or something that happens on a web page.

**Event handler**: A callback function that executes code in response to an event.

**submit event**: An event that occurs when a user clicks on a `<button>` element or an `<input>` element (whose `type` attribute is set to `submit`) within a `<form>` to submit a form on a web page.

Here are some other useful resources:

- MDN
  - [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
    - [HTMLFormElement: submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
  - [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
    - [Event: preventDefault() method](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

## Instructions

In this lab, you will practice adding an event listener to allow for a `<form>` element to listen for the `submit` event and execute code in response to the `submit` event.

**Fork and clone** this lab into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. There is some starter code provided in `index.js`.

These are your tasks:

1. Add an event listener to the `<form>` element with the id of `new-food-form` that will allow the `<form>` element to listen for a `submit` event and will call the `handleSubmit()` function in response to the `submit` event.
2. `handleSubmit(event)`: The `handleSubmit()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `event` whose value should be a `SubmitEvent` object, when the correct value is passed as an argument into the function. When the `handleSubmit()` function is called, the following actions should take place:
    - The `preventDefault()` method is called on the `SubmitEvent` object to prevent the page from refreshing.
    - An `object` is created and stored into a variable named `newFood`. The `object` contains the following key and value pairs:
      - A key of `name` whose value is set to the value of the `value` attribute of the `<input>` element with the id of `new-name`.
      - A key of `image` whose value is set to the value of the `value` attribute of the `<input>` element with the id of `new-image`.
      - A key of `description` whose value is set to the value of the `value` attribute of the `<textarea>` element with the id of `new-description`.
      - A key of `healthy` whose value is set to `true` if the value of the `value` attribute of the `<select>` element with the id of `healthy-select` is strictly equal to `healthy`, and `false` otherwise.
    - The `object` referenced by the `newFood` variable is added to the array referenced by the `foods` variable.
    - `If` the value of the `value` attribute of the `<select>` element with the id of `food-select` is strictly equal to `all`, the `addFoodImageToMenu()` function is called and the `object` referenced by the `newFood` variable is passed in as an argument to the `addFoodImageToMenu()` function.
    - `If` the value of the `value` attribute of the `<select>` element with the id of `food-select` is strictly equal to `healthy`, the `addHealthyFoodToMenu()` function is called and the `object` referenced by the `newFood` variable is passed in as an argument to the `addHealthyFoodToMenu()` function.

## Submission and Grading Criteria

When you're done with this lab, remember to commit and push your changes up to GitHub, then
submit your work to Canvas using CodeGrade.
