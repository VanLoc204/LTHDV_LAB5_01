const Supplier = require('../models/Supplier');

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('suppliers/index', { suppliers });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.newSupplier = (req, res) => {
  res.render('suppliers/new');
};

exports.getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).send('Supplier not found');
    }
    res.render('suppliers/edit', { supplier });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.redirect('/suppliers');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).send('Supplier not found');
    }
    res.render('suppliers/edit', { supplier });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/suppliers');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.redirect('/suppliers');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
