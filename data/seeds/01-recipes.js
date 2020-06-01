exports.seed = function(knex) {
      return knex('recipes').insert([
        { name: 'rceipe-01', instructions: "mix everything"},
        { name: 'recipe-02' , instructions:" bake stuff"}
        
      ]);
    }