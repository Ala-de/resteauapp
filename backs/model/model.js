const mongoose=require ('mongoose')
const Schema = mongoose.Schema

const produitSchema = new Schema({
   name:{
        type:String,
        required:true
    },
    prix:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('produit', produitSchema)