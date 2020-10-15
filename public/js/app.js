console.log('Client side javascript file is loaded!');





const form = document.querySelector('form');
const address = document.querySelector('input');

const resultview = document.querySelector('#resultview');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    fetch('/weather?address='+ address.value).then((res)=>{
        res.json().then((data)=>{
    
            if(data.error){
                console.log(data.error);
            }else{
                resultview.innerHTML=JSON.stringify(data);
            }
            
        })
    })
})