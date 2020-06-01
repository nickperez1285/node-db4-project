exports.seed = function(knex) {
      return knex('ingredients').insert([
        { name:"stuff" },
        { name: "mush" }
        
      ]);
    }