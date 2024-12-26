// filepath: /e:/githubprojs/couchdb-crud/app.js
const express = require('express');
const bodyParser = require('body-parser');
const createDocument = require('./c');
const readDocument = require('./r');
const updateDocument = require('./u');
const deleteDocument = require('./d');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/c', async (req, res) => {
  try {
    const response = await createDocument(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/r/:id', async (req, res) => {
  try {
    const doc = await readDocument(req.params.id);
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 
 app.get('/read-all', async (req, res) => {
    try {
      const response = await db.list({ include_docs: true });
      res.json(response.rows.map(row => row.doc));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


app.put('/u/:id', async (req, res) => {
  try {
    const response = await updateDocument(req.params.id, req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/d/:id', async (req, res) => {
  try {
    const response = await deleteDocument(req.params.id);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});