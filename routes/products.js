const express = require("express");
const router = express.Router();
const productController = require('../controller/productController');

//Display create-product form/page
router.get('/create', productController.displayCreateProductPage); 

//Create the product
router.post("/create", productController.createProduct);

//fetching all products
router.get("/", productController.getAllProducts);

//delete the product
router.delete("/:id", productController.deleteProduct);

//update the product quantity
router.post("/:id/update_quantity", productController.updateProductQuantity);

module.exports = router;
