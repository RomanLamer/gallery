const { Router } = require('express');
const router = Router();
const path = require('path');
const fs = require('fs');


router.get('/',(req,res)=>{
    res.sendFile('/index.html');
})

router.get('/imagesDB',(req,res)=>{
    let data = JSON.parse(fs.readFileSync('images/data.json'));
    data.forEach(link=>{
            if(!link.date){
                link.date = new Date();
            }        
    })
    fs.readdir('images',(err,files)=>{
        files.forEach(file=>{
            let exist = data.some(el => el.link === file);
            const ext = file.split('.').pop();
            !exist?ext != 'json'?data.push({link:file,date:new Date()}):null:null;
        }) 
        fs.writeFile(`images/data.json`,JSON.stringify(data),()=>{})
 })
 res.send(JSON.stringify({
    data:data
 }))
})

router.post('/add/photo',(req,res)=>{
    const {link} = req.body
    if (link.split('/').length > 1) {
        let data = JSON.parse(fs.readFileSync('images/data.json'));
        data.push({link:link,date:new Date()})
        fs.writeFile(`images/data.json`,JSON.stringify(data),()=>{})
    }else{
        res.sendStatus(400)
    }
})

module.exports = router;