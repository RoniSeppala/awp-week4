const express = require('express');
const router = express.Router();

const recipeJSON = {

}

router.get("/recipe/:food",(req, res) => {
    
    res.send(recipeJSON)
})
module.exports = router;
