const recipe = {title: "Tex-Mex Meatballs",
level: "Easy Peasy",
ingredients: ["1/2 lb. ground beef", "panko bread crumbs","2 tbsp. freshly chopped parsley","2 cloves garlic, minced","1/2 large onion, chopped"],
cuisine: true,
dishType: "Dish",
image: "",
duration: 30,
creator: "Lauren",
created:""};


Recipe.create(recipe)
    .then((recipe) => {
       
        console.log('- Created recipe', recipe.title);
        return Recipe.insertMany(recipes)
    })
    .then((recipes) => {
        for (let recipe of recipes) {
          console.info('- Created recipe', recipe.title);
        }
    
        return Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { $set: { duration: 100 } }, { new: true });
      })
    
  .then((recipe) => {
   
    return Recipe.findOneAndRemove({ title: 'Carrot Cake' });
  })
  .then((recipe) => {
    console.info('========== Iteration 5');
    console.info(`${recipe.title} successfully removed!`);
  })
  .catch(error => console.error(error))
  .then(() => {
    console.info('========== Cleaning database...');
    return mongoose.connection.dropDatabase();
  })
  .then(() => {
    console.info('========== Closing database...');
    return mongoose.connection.close()
  })
  .catch(error => console.error(error));