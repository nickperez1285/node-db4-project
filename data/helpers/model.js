const db = require('../dbConfig.js');
module.exports = {
getRecipes,
getShoppingList,
getInstructions
};

function getRecipes(){
	return db('recipes')
}

function getShoppingList(recipe_id){
	return db('recipe_ingredients')
	.where({recipe_id})

}

function getInstructions(id){
	return db('recipes')
	.where({id})
}