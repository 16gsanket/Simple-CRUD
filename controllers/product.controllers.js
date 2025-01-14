import Product from "../models/product.models.js";

const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: "error in fethcing the products" });
      }
}

const createProduct =async(req,res)=>{
    try {
        const productCreateResposne = await Product.create(req.body);
        console.log(productCreateResposne);
        res.status(200).json(productCreateResposne);
      } catch (error) {
        res.status(500).json({ message: "error in creating the product" });
      }
}
const getSpecificProduct =async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: "could not retrive the product" });
      }
}
const editProduct =async(req,res)=>{
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    
        if (!updatedProduct) {
          return res.status(404).json({ message: "product not found" });
        }
    
        const productNewUpdates =await Product.findById(id);
    
        res.status(200).json({ message: "product updated successfully", productNewUpdates });
      } catch (error) {
        res.status(500).json({ message: "could not retrive the product" });
      }
}
const deleteProduct =async(req,res)=>{
     try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
          return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({ message: "product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "could not delete the product" });
      }
}

export {
    getProducts,
    createProduct,
    getSpecificProduct,
    editProduct,
    deleteProduct
}