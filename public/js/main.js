const submitBtn=document.getElementById('submitBtn');

const getInfo = (event)=>{
       event.preventDefault();
         let url=api.openweathermap.org/data/2.5/weather?q={pune}&appid={API key}
}

submitBtn.addEventListener('click',getInfo);