
    //signIn

    //signOut

const UtilisateurModel = require('../models/utilisateur.model');

module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {username, email, password} = req.body;

    try {
        const utilisateur = await UtilisateurModel.create({username, email, password});
        res.status(201).json({utilisateur: utilisateur._id});
    }
    catch(err) {
        res.status(200).send({ err });
    }
}