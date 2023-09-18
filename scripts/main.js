/* 
This is the main script used in the app.
It contains any functions and logic that is used
to provide functionality to the app.


Database:
This script utilizes indexedDB to store
note contents into a database.
# notesDB = database for note contents.
*/





// Make a function that allows the user to edit the content of the applied area.
// This function is intended to be invoked via an onclick event listener on the desired areas.
function edit_contents(id) {
    let content;

    content = document.getElementById(id);
    console.log(content);
    content.contentEditable = true;
    content.focus();

    // Remove hover functionality from element
    document.getElementById(id).classList.remove("editable");
}


// Convert the html content of the note to json
// If a savefile for the specified note does not exist, create one
function convert_to_json() {
    let html = document.getElementById("viewport");
    let json = JSON.stringify(html); 
}