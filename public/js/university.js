const university_name=document.getElementById('university_name');
const search_university=document.getElementById('search_university');
const btn=document.getElementById('SbmtBtn');
const website=document.getElementById('site_link');
const temp_status=document.getElementById('temp_status');
const datahide = document.querySelector('.main_layer');
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

let api="http://universities.hipolabs.com/search?country=india";


let x=search_university.value;
const getData= async(event)=> {
  
    
        event.preventDefault();
    
        const response =await fetch(api);
    
        const data=response.json();
                    data.then((value)=>{

                                value.map((items)=>{
                                                const name=(items.name).replace(/\s+/g, ''); 
                                                let s1 = name.toUpperCase();
                                                let x=search_university.value;
                                                x=x.replace(/\s+/g, ''); 
                                                let s2 = x.toUpperCase();
                                                let result = s1.includes(s2);

                                                        if (result) {
                                                            datahide.classList.remove('data_hide');
                                                            university_name.innerText=items.name;
                                                            website.href=items.web_pages[0];
                                                            temp_status.innerText=items.country;
                                                            

                                                        } 


                                                });
                                         });

                                }



btn.addEventListener('click',getData);