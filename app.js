const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3330;
const URL = `mongodb+srv://Ejiro:${process.env.DB_PASSWORD}@cluster0.rsi5w.mongodb.net/Node_Express_Auth`;

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
