const Product = require("../models/product");

//Returns the list of all products
module.exports.getAllProducts = (req, res) => {
  Product.find({})
    .then((result) => {
      // res.render('productList');
      res.status(200).render('productList', {
        productList: result
      });
    })
    .catch((error) => {
      console.log(`Error while getting products list`);
      res.status(400).send("Error while getting products list");
    });
};

module.exports.displayCreateProductPage = (req, res) => {
  res.render('createProduct');
}

//Create the product
module.exports.createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).send(newProduct);
};

//Delete the product
module.exports.deleteProduct =  (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (result) return res.send(`Product Deleted Successfully - ${result}`);
      return res.send(`No Product Found with this id- ${result}`);
    })
    .catch((error) => {
      console.log(`Error while deleting product ${error}`);
    });
};

//Updating the quantitiy of the product
module.exports.updateProductQuantity = async (req, res) => {
    const product = await Product.findById(req.params.id);

    //If product found then updating its quantity
    if(product) {
        product.quantity = Number(product.quantity) + Number(req.query.number);
        product
          .save()
          .then((doc) => res.send(`Document updated Successfully`))
          .catch((error) => res.send(`Error while updating quantity - ${error}`));
    } 
    return res.send(`No Product is Found on this id`);

  }