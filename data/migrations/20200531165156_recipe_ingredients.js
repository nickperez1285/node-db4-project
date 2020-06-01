exports.up = function(knex) {
	return knex.schema
.createTable('recipe_ingredients', tbl => {
  tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist already
    .inTable('ingredients')
  tbl.integer('ingredients_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist already
    .inTable('recipes')
	})
 	tbl.decimal('quantity')
        .notNullable()

  // the combination of the two keys becomes our primary key
  // will enforce unique combinations of ids
  tbl.primary(['ingredients_id', 'recipe_id']);
};


exports.down = function(knex) {
		return knex.schema.dropTableIfExists('recipe_ingredients')

  
};
