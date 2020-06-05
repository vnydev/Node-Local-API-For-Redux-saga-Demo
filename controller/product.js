const { CreateProduct, GetAllProducts, GetOneProduct, UpdateOneProduct } = require('../model/product');

const Create_Product = async (req,res) => {
    try{
        const body = req.body;

        const result = await CreateProduct(body);

        res.status(200).send({message: "Product successfully created."});
    }catch(error){
        res.status(500).send({message: error.message || "Internal server error."});
    }
};

const UpdateProduct = async (req, res) => {
    try{
        const _id = req.params.id;
        const body = req.body || {};
        const context = { _id };

        const result = await UpdateOneProduct(context, body);

        res.status(200).send({message:"Porduct successfully updated."});
    }catch(error){
        res.status(500).send({message: error.message || "Internal server error."});
    }
};

const GetAll = async (req, res) => {
    try{
        const query = req.query || {};
        const context = { ...query };

        const result = await GetAllProducts(context, "");

        res.status(200).send(result);
    }catch(error){
        res.status(500).send({message: error.message || "Internal server error."});
    }
};

const GetOne = async (req, res) => {
    try{
        const _id = req.params.id;
        const query = req.query || {};
        const context = { _id, ...query };

        const result = await GetOneProduct(context, "");

        res.status(200).send(result);
    }catch(error){
        res.status(500).send({message: error.message || "Internal server error."});
    }
};

module.exports = {
    GetAll,
    GetOne,
    Create_Product,
    UpdateProduct
};