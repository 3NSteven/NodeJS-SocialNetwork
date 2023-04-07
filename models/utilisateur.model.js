const mongoose = require('mongoose');
const { isEmail } = require('validator');

const utilisateurSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true    //supprime les espaces
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,  //crypter
            minLength: 6
        },
        picture: {
            type: String,
            default: "./uploads/profil/random-user.png"
        },
        bio: {
            type: String,
            max: 1024
        },
        followers: {
            type: [String]  //id des followers
        },
        following: {
            type: [String]  //id des follows
        },
        likes: {
            type: [String]  //id des posts liker (pour pas liker en double)
        }
    },
    {
        timestamps: true    //date de creation
    }
)

const UtilisateurModel = mongoose.model('utilisateur', utilisateurSchema);
module.exports = UtilisateurModel;