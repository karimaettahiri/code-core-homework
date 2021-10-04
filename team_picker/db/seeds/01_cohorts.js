const faker = require ("faker")
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      const cohorts = [];
      
      for (let i=0; i<100; i++){
        let names=''
      for(let i=0; i<10 ; i++){
        if(i===9){
          names+=`${faker.name.firstName()}`
        }
        else{
          names+=`${faker.name.firstName()},`
        }
        

      }
        cohorts.push({
          name:faker.name.firstName(),
          members:names,
          logoUrl : faker.image.imageUrl(),
         
        })
      }
     
        return knex('cohorts').insert(cohorts)
    });
};
