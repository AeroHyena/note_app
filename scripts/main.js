/* 
This is the main script used in the app.
It contains any functions and logic that is used
to provide functionality to the app.
*/


// Make a function that allows the user to edit the content of the applied area.
// This function is intended to be invoked via an onclick event listener on the desired areas.
function edit_contents(id) {
    let content;

    content = document.getElementById(id);
    console.log(content);
    content.contentEditable = true;
    content.focus();
}