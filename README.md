# CouchDB CRUD Operations with Node.js

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using CouchDB and Node.js. The project includes a simple web interface to interact with the database.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [CouchDB](https://couchdb.apache.org/) (v3 or later)

## Project Structure
```
    couchdb-crud/ 
    ├── db.js 
    ├── c.js 
    ├── r.js 
    ├── u.js 
    ├── d.js 
    ├── app.js 
    └── public/ 
        └── index.html
```

## Setup

### CouchDB Configuration

1. **Install CouchDB**:
   Follow the [official installation guide](https://docs.couchdb.org/en/stable/install/index.html) to install CouchDB on your system.

2. **Start CouchDB**:
   Ensure CouchDB is running. You can access the CouchDB web interface at `http://127.0.0.1:5984/_utils`.

3. **Create Admin User**:
   Create an admin user if you haven't already. This can be done through the CouchDB web interface.

4. **(optional) Initialize Counter Document**:
   Initialize a counter document in CouchDB to manage document IDs:
   ```powershell
        curl -X PUT http://admin:password@127.0.0.1:5984/userdb/counter -d '{"value": 0}' 
    ```

### Node.js Configuration

- Clone the Repository:
    ``` powershell
        git clone https://github.com/gatogato999/couchdb-crud.git
        cd couchdb-crud
    ```
- Install Dependencies: 
    ``` npm install ```
- Start the Server: 
    ``` node app.js ``` 
    >  The server will start on http://localhost:3000.


## Files Overview
1. **db.js** : This file sets up the connection to CouchDB and ensures the userdb database exists.
1. **c.js** (Create) : Handles creating new documents with sequential IDs.
1. **r.js** (Read) : Handles reading documents by ID.
1. **u.js** (Update) : Handles updating documents by ID.
1. **d.js** (Delete) : Handles deleting documents by ID.
1. **app.js** : Sets up the Express server and routes for CRUD operations.
1. **index.html** : A simple web interface to interact with the CRUD operations.

## License
This project is licensed under the MIT License.

## TODO
- [ ] Improve the documentation to include detailed setup instructions, API documentation, and usage examples
- [ ] Write unit tests for the server-side code to ensure that the CRUD operations work correctly. 
- [ x ] make the webpage automatically read and display all documents without needing a "Read" button 
- [ x ] display the documents in a table format with columns for id, name, and age
- [ x ] modify the update functionality to allow updating both the name and age fields, and only update the fields that are specified . 
- [ ] Ensure that the input fields are properly validated before sending requests to the server. For example, check that the age is a positive number and the name is not empty.
- [ ] Improve error handling on both the client and server sides. Display user-friendly error messages on the webpage when an operation fails.
- [ ] Improve the styling of the webpage to make it more visually appealing.
- [ ] Add a search feature to allow users to search for documents by name or other fields.
- [ ] Add a detailed view for each document that displays all its fields. 
- [ ] Allow users to edit documents directly in the table without needing to use the update form. 
- [ ] Implement pagination for the list of documents if the number of documents becomes large.
