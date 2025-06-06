
const Product = require("../models/product.model")


const createProduct = async (req, res) => {
    console.log(req.body)
    try{
        const product =  await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try{
        const {id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try{
        const {id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product){
            return res.status(404).json({message: "Product not found"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

        
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    try{
        const {id } = req.params;
        const product = await Product.findByIdAndDelete(id)
        if (!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product deleted successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}


