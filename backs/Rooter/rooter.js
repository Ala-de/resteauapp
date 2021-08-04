const express=require ('express')
const router =express.Router()
const produit = require('../controller/usecontroller')


router.get('/get',produit.getProduit)
router.post('/add',produit.addProduit)
router.put('/:id',produit.updateProduit)
router.delete('/:id',produit.deleteProduit)


module.exports = router 

