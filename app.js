const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const URL =
  'mongodb+srv://Ejiro:Ejiroghene10@cluster0.rsi5w.mongodb.net/Node_Express_Auth?retryWrites=true&w=majority';

app.use(express.static('public'));

app.set('view engine', 'ejs');

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB connected! Server running on http://localhost:${PORT}`);
    });
  });

app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
