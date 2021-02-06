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
    document.querySelectorAll('.gallery__item').forEach(el=>{
        el.addEventListener('click',(e)=>{
            let url = e.target;
            model.style = ""
            document.querySelector('.model__wrapper').style.backgroundImage = url.style.backgroundImage;
    })
    })
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