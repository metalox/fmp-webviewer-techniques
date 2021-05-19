// js-pet-survey-script-ie.js
// for windows ie.
// whcih does not properly support the FormData API - sadly!
// see here:
// https://www.learnwithjason.dev/blog/get-form-values-as-json

/**
* A handler function to prevent default submission and run our custom script.
* @param {Event} event the submit event triggered by the user
* @return {void}
*/
const handleFormSubmit = (event) => {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
    // TODO: Call our function to get the form data.
    const data = {};
    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, ' ');
    // ...this is where we’d actually do something with the form data...
    };
/*
* This is where things actually get started. We find the form element using
* its class name, then attach the `handleFormSubmit()` function to the
* `submit` event.
*/
const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
    


