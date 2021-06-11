const express = require('express');
const mongoose = require('mongoose');

const app = express();
const URL =
  'mongodb+srv://Ejiro:Ejiroghene10@cluster0.rsi5w.mongodb.net/Node_Express_Auth?retryWrites=true&w=majority';

app.use(express.static('public'));

app.set('view engine', 'ejs');

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running');
    });
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});
