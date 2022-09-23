const defaultTheme = ev => {
    document.querySelector('section').className = "container";
};

const oceanTheme = ev => {
    document.querySelector('section').className = "ocean";
};

const desertTheme = ev => {
    document.querySelector('section').className = "desert";
};

const highContrastTheme = ev => {
    document.querySelector('section').className = "high-contrast";
}; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/