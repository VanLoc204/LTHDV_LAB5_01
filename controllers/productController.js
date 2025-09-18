const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('supplierId');
    const suppliers = await Supplier.find();
    res.render('products/index', { products, suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Hiển thị form tạo sản phẩm mới
exports.newProduct = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render('products/new', { suppliers });
};

// Lấy sản phẩm theo ID
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('supplierId');
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('products/edit', { product }); // Assuming edit view for now, or create show.ejs if needed
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Tạo sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Hiển thị form chỉnh sửa sản phẩm
exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('supplierId');
    const suppliers = await Supplier.find();
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('products/edit', { product, suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
