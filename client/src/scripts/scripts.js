window.addEventListener('load',async ()=>{
    try{
    const files = await (await fetch('/imagesDB')).json();
    if (files) {
        let HTML = ``;
        console.log();
        for (let i = 0; i < files.data.length; i++) {
            let typpeOfLink = files.data[i].link.split('://').length;
            HTML+= `<div class="gallery__item" style="background-image:url('${typpeOfLink > 1?`${files.data[i].link}`:`./images/${files.data[i].link}`}')"></div>`;
        }
        document.querySelector('.gallery').innerHTML = HTML;
    }
    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    let random = Math.round(rand(0,files.data.length));
    random === files.data.length?random = random - 1:null;
    let typpeOfLink = files.data[random].link.split('://').length;
    document.querySelectorAll('.gallery__item').forEach(el=>{
        el.addEventListener('click',(e)=>{
            let url = e.target;
            model.style = ""
            document.querySelector('.model__wrapper').style.backgroundImage = url.style.backgroundImage;
    })
    })
    document.querySelector('.main').style.backgroundImage=`url('${typpeOfLink > 1?`${files.data[random].link}`:`./images/${files.data[random].link}`}')`
    }catch(err){
        throw err
    }   
})
const model = document.querySelector('.model');
model.addEventListener('click',()=>{
    model.style.display = 'none';
})
document.getElementById('quit').addEventListener('click',()=>{
    document.querySelector('.addPhoto').style.display = "none"
})
document.getElementById('addNewPhoto').addEventListener('click',()=>{
    document.querySelector('.addPhoto').style.display="flex"
    
})
document.getElementById('addLink').addEventListener('click',()=>{
    const link = document.getElementById('link').value;
    fetch('/add/photo',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            link:link
        })
    })
})