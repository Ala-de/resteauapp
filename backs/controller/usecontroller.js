const User =require ('../model/model')


module.exports = {
    //addProduit
    addProduit:async(req,res)=>{

            const name = req.body.name
            const prix= req.body.prix
            const image=req.body.image
           
          

        try {
            produit = new Produit ({
                name,
                prix,
                image,
                
            })
            await produit.save()
            res.json(produit)


        }catch(error){
            console.error(error.message)
         }
    },
    //getproduit
    getProduit:async(req,res)=>{
        try{
            const produit =await User.find();
            res.json(produit)

        }catch(error){
        console.error(error.message)
 
        }

    },
    //delete
    deleteProduit:async(req,res)=>{
        try{
            const produit = await Produit.findByIdAndDelete(req.params.id)
            res.json(produit)
        }catch(error){
        console.error(error.message)

    }
 
},
//update
    updateProduit:async(req,res)=>{
        try{
            const produit =await Produit.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json(produit)

        }catch(error){
        console.error(error.message)
    }
}

}
