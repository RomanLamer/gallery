const { Router } = require('express');
const router = Router();
const path = require('path');
const fs = require('fs');


router.get('/',(req,res)=>{
    res.sendFile('/index.html');
})

router.get('/imagesDB',(req,res)=>{
    fs.readdir('images',(err,files)=>{
        res.send(JSON.stringify({
            quantity:files.length,
            files:files
        }))
    });
})

module.exports = router;