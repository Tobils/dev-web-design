const express = require('express');
const app = express();
const path = require('path');
const pages = require('./routes/halaman');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', 'views');
app.use(pages);
app.listen(3030);