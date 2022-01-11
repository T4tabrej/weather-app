// const express=require('express')
// const app=express();
// const path=require('path')
// const hbs=require('hbs')
// //if 30000 port be then it will run on it
// const port =process.env.PORT || 3000;
// /* to call a static html page we have to use
// static_path =path of the html file
// app.use(express.static())


// */

// //first store the html file in  path 
// // console.log(__dirname);
// // console.log(path.join(__dirname,'../public'));
// const static_path=path.join(__dirname,'../public')
// // setting partials path for using template partial
// // const template_path=path.join(__dirname,'../templates/views')
// // const partials_path=path.join(__dirname,'../templates/partials')
// // last step using view engine 



// //setting the partils path
// // app.set('views',template_path);

// // hbs.registerPartials(partials_path);
// //it will directly called the index.html page 
// app.use(express.static(static_path))
// app.set('view engine', 'hbs');
// // app.use(express.static(static_path))

// // step 1
// app.get('/',(req,res)=>{
// // res.send('Welcome to HomePage ');
// res.render('index');
// });

// // about us page

// app.get('/about_us',(req,res)=>{
//     // res.send('Welcome to AboutUs page ');
//     res.render('about');
//     });

// // Wheather page 

// app.get('/weather',(req,res)=>{
//     // res.send('Welcome to Wheather page ');
//     res.render('wheather');
//     });
// //404 page 

// app.get('* ',(req,res)=>{
//     // res.send('404 page ');
//     res.render('404');
//     });
    

// app.listen(port,()=>{
//     console.log(`Listening at Port No ${port}`);
// })
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get("/", (req,res) =>{
    res.render('index')
})

app.get("/about_us", (req,res) =>{
    res.render('about')
})

app.get("/universities", (req,res) =>{
    res.render('universities')
})
app.get("/weather", (req,res) =>{
    res.render('wheather')
})


app.get("*", (req,res) =>{
    res.render('404', {
        errorMsg : "Opps! page not found, Click Here to go back"
    })
})


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})