const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Name: {type: String, default: null},
    Category: {type: String, default:null},
    Description: {type: String, default: null},
    Price: {type: Number, default: null},
    ImageUrl: {type: String, default: null}
});

const ProductWorker = mongoose.model('Products', ProductSchema );


const CreateProduct = async (product) => {
    let newProduct =  new ProductWorker(product);
    return await newProduct.save();
};

const GetAllProducts = async (context, select) => {
    return await ProductWorker.find(context).select(select).lean().exec();
};

const GetOneProduct = async (context, select) => {
    return await ProductWorker.findOne(context).select(select).lean().exec();
};

const UpdateOneProduct = async (context, data) => { 
    return await ProductWorker.findOneAndUpdate(context, data).exec();
};

module.exports = {
    CreateProduct,
    GetAllProducts,
    GetOneProduct,
    UpdateOneProduct
};

// ProductWorker({
//     Name: "Apple Iphone",
//     Category: "Smartphone",
//     Description: "This color makes a difference. Choose (RED). Save lives. Now through September 30, Apple is partnering with (RED) to redirect 100% of eligible proceeds from (PRODUCT)RED purchases to the Global Fund’s COVID‑19 Response. This will provide critical support in health systems most threatened by the outbreak and, in turn, help preserve lifesaving HIV/AIDS programs in sub-Saharan Africa.",
//     Price: 80000,
//     ImageUrl: "https://www.apple.com/v/product-red/o/images/meta/og__dbjwy50zuc02.png?202004271452"
// })
// .then(res => console.log(res))
// .catch(Error => console.log(Error.message));