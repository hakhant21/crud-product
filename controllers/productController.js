const Product = require('../models/product');

module.exports.index = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products);
    }catch(err){
        res.status(400).send('Somethings isnt right cannot find any products');
    }
}

module.exports.store = async (req, res) => {
    const { name, price} = req.body;
    try{
        const product = await Product.create({name, price});
        res.status(201).json(product);
    }catch(err){
        console.log(err, 'Somethings Wrong Cannot create products')
    }
}


module.exports.show = async (req, res) => {
   const id = req.params.id;
   try{
       const product = await Product.findById(id);
       res.status(200).json(product);
   }catch(err){
    res.status(400).send('Somethings isnt right cannot find with given id products');
   }
}

module.exports.update = async (req, res) =>{
  const id = req.params.id;
  const { name, price} = req.body;
  try{
      const newProduct = await Product.findOneAndUpdate(id,{name,price});
      res.status(200).json(newProduct);
  }catch(err){
    res.status(400).send('Somethings isnt right cannot update with given id products');
  }

}

module.exports.destroy = async (req, res) => {
   const id = req.params.id;
   try{
     await Product.findOneAndDelete(id);
    res.status(200).send('Successfully Deleted...');
   }catch(err){
     res.status(400).send('Somethings isnt right cannot delete with given id products');
   }
}

