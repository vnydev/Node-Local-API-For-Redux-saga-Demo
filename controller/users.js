const { GetAllUsers, CreateUser } = require('../model/users');

const Create_user = async (req,res) => {
    try{
        const body = req.body;

        const newUser = await CreateUser(body);

        res.status(200).send({message: "User successfully created."});
    }catch(error){
        res.status(500).send({message: error.message || "Internal server error."});
    }
};

const GetAll = async (req, res) => {
    try{
        const query = req.query || {};
        const context = { ...query };

        const users = await GetAllUsers(context, "");

        res.status(200).send(users);
    }catch(error){
        res.status(500).send({message: error.message || "Internal server error."});
    }
};

module.exports = {
    GetAll,
    Create_user
};