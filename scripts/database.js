/* Manage a database for the notes on app launch */
// https://stackoverflow.com/questions/13443503/run-javascript-code-on-window-close-or-page-refresh

const dbName = "notesDB";



// Open the notesDB database or create it if it doesn't exist
const request = window.indexedDB.open(dbName, 1); 


// Define behavior for new database creation
request.onupgradeneeded = (event) => {
    // Save the IDBDatabase interface
    const db = event.target.result;

    // Create an objectstore for the notes with an autogenerated unique note-id
    const objectStore = db.createObjectStore("notes", { autoIncrement: "note-id" });

    // Create an index to search notes by id.
    // We want to make sure that note IDs are unique.
    objectStore.createIndex("note-id", "note-id", { unique: true });

    // Use transaction oncomplete to make sure the objectStore creation is
    // finished before adding data into it.
    objectStore.transaction.oncomplete = (event) => {
        // Store values in the newly created objectStore.
        const noteObjectStore = db
        .transaction("notes", "readwrite")
        .objectStore("notes");
        noteData.forEach((note) => {
        noteObjectStore.add(note);
    });
  };

};


//  define success and error handlers for the request
request.onerror = (event) => {
    console.error("Error creating database link to notesDB: Check that you have enabled the webapp to use IndexedDB!");
};

request.onsuccess = (event) => {
    console.log("Database link created to notesDB");
    const db_link = event.target.result;
};



// Create a transaction to the notes object store
// that allows for both reading and writing data
const transaction = db_link.transaction(["notes"], "readwrite");

// Handle success and error handlers for the transaction
transaction.onerror = (event) => {
    console.log("error on DB dransaction")
};

transaction.oncomplete = (event) => {
console.log("Transaction on object store 'notes' successful");

};

const objectStore = transaction.objectStore("notes");
const insertData = {"absde", "12345"} // temp

// for adding data
insertData.forEach((note) => {
    const request = objectStore.add(note);
    request.onsuccess = (event) => {
        // event.target.result === insertData.note;
    };
});

// for rerieving data
// getall() is better in this case since we want to get all the notes nii the db
objectStore.getAll().onsuccess = (event) => {
    console.log(`Got all notess: ${event.target.result}`);
  };
  