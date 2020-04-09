const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    const email = req.body,email;
    res.json({message:email});
    
});

module.exports = router;