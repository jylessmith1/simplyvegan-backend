var express = require('express');
var router = express.Router();

const { Recipe } = require("../models");
//GET all recipes
// router.get('/', async(req,res) => {
//     try{
//         const recipes = await Recipe.findAll()
//         res.json(recipes)
//     }
//     catch (error){
//         res.status(500).json({ message: "Error retrieving random recipe", error });
//     }
// })


//GET randomized recipe
router.get('/random',async(req,res) => {
    try{
        console.log('trying')
        const count = await Recipe.count()

        //function to generate a random number between 1 and the number of rows of the Recipe table
         let randomNum = () =>{
            let num = 1+Math.floor(Math.random()*(count))
            return num
        }
       
    const recipe = await Recipe.findByPk(randomNum())
    res.json(recipe)
    }
    
    catch (error){
        res.status(500).json({ message: "Error retrieving random recipe", error });
    }
})

module.exports = router;