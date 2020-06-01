const express = require('express');
const router = express.Router();
const db = require("../data/dbConfig.js");
const model = require('../data/helpers/model.js')

router.get('/', (req,res) => {
	model.getRecipes()
	.then( recipes => {		
		res.status(200).json(recipes)
		})

})


router.get('/:id', (req,res) => {
	model.getShoppingList(req.params.id)
	.then( recipes => {		
		res.status(200).json(recipes)
		})

})


router.get('/:id/instructions', (req,res) => {
	model.getInstructions(req.params.id)
	.then( recipes => {		
		res.status(200).send(recipes[0].instructions)
		})

})



module.exports = router;