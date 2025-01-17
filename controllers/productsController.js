const productSchema = require('../models/product');
const asyncWrapper = require('../middleware/async');

const getAllProducts = asyncWrapper(async (req, res) => {
    const product = await productSchema.find({});
    res.status(201).json({ product });
})

const createProduct = asyncWrapper( async (req, res) => {
    const product = await productSchema.create(req.body);
    res.status(201).json({ product });
})


const getProduct =  asyncWrapper(async (req, res) => {
    const { id: productID } = req.params;
    const product = await productSchema.findOne({ _id: productID });
    if (!product) return res.status(404).json({ message: `No product with id ${productID}` });
    res.status(201).json({ product} );
})

const updateProduct =  asyncWrapper(async (req, res) => {
    const {id: productID} = req.params;
    const product = await productSchema.findOneAndUpdate({ _id: productID}, req.body, {
        new: true,
        runValidators:true
    })
    console.log(product);
    if (!product) return res.status(404).json({ message: `No product with id ${productID}` });
    res.status(201).json({ product });
})

const deleteProduct =  asyncWrapper(async (req, res) => {
    const { id: productID } = req.body;
    const product = await productSchema.findOneAndDelete({ _id: productID });
    if (!product) return res.status(404).json({ message: `No product with id ${productID}` });
    res.status(201).json({ product });
})

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}