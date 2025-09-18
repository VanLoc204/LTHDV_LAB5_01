const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/supplier_product_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app; 