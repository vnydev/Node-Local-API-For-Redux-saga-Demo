const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: {type: String, default: null},
    Age: {type: Number, default:0},
    Profession: {type: String, default: null},
    Gender: {type: String, enum:["Female", "Male", "Others"], default: null},
    ImageUrl: {type: String, default: null}
});

const UserWorker = mongoose.model('Users', UserSchema );


const CreateUser = async (user) => {
    let newUser =  new UserWorker(user);
    return await newUser.save();
};

const GetAllUsers = async (context, select) => {
    return await UserWorker.find(context).select(select).exec();
};

module.exports = {
    GetAllUsers,
    CreateUser
};

// CreateUser({Name:"Sandy", Age:28, Profession: "DM", Gender:"Male"})
// .then(res => console.log(res))
// .catch(Error => console.log(Error.message));