//sets up paths to express, path, and routes.js
const express = require('express');
const path = require('path');
const api = require('./routes/routes.js');
//sets the port to 4000
const PORT = process.env.PORT || 4000;
//sets an app const to express
const app = express();
//sets up express and then connects the api path
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static('public'));
//app.get route to the notes html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
//app.get route to the index html
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
//listens to the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);