const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const btn=document.getElementById('SbmtBtn');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const current_day=document.getElementById('day');
const todays_date=document.getElementById('todays_date');


const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "saturday"];

let month = months[d.getMonth()];
let date=d.getDate();

let day=weeks[d.getDay()];
// console.log(date + " "+ month   +" "+ day);
// getting date and time

current_day.innerText=day;
todays_date.innerText=`${date+" "+month}`;



// console.log(btn);
const apiId="a7592b36fa882824a8f5135689e04577";

const getInfo=async(event)=>{
    event.preventDefault();
  let  cityVal=cityName.value;

    if (cityVal==="") {
        city_name.innerHTML=`Please enter the City Name Before Search.`;
        datahide.classList.add("data_hide");
    } 
    else {
        try {
            let api=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiId}`;
            // const response=await fetch(url);
            const response =await fetch(api);
            const data=response.json();
            // console.log(data);
         data.then((value)=>{
             const temp_deg=(value.main.temp)-273.15;
             const tem_mood=value.weather[0].main;
             temp.innerText=Math.floor(temp_deg);
             city_name.innerText=`${value.name},${value.sys.country}`;

            if (tem_mood=="Clear") {
                
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#f5e642'></i>";
            }
            else if(tem_mood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud-sun' style='color:#f1f2f6'></i>";
               
               
            }
            else if(tem_mood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-moon-rain' style='color:#64a4bd'></i>";
            }
            
            else {
                temp_status.innerHTML="<i class='fas fa-cloud-sun' style='color:#f1f2f6'></i>";
            }


             console.log(temp_deg);
             console.log(tem_mood);
             console.log(value);
             datahide.classList.remove('data_hide');
             cityVal = " ";
           

         });
         
            
        } catch (error) {
            console.log(error);
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
        }
       

    }


    // alert("Succes")
}

btn.addEventListener('click',getInfo);