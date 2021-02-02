window.addEventListener('load',async ()=>{
    try{
    const data = await (await fetch('/imagesDB')).json();
    if (data) {
        let HTML = ``;
        for (let i = 0; i < data.quantity; i++) {
            HTML+= `<div class="gallery__item" style="background-image:url('./images/${data.files[i]}')"></div>`;
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