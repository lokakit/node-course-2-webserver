const express=require("express");
const hbs= require("hbs");

var app=express();


/*register partials for hbs*/
hbs.registerPartials(__dirname+"/views/partials");

/*register Helpers--> simply funtions in hbs*/
hbs.registerHelper('getcurrentYear',()=>{
	return new Date().getFullYear();
})

hbs.registerHelper('ScreamIt',(text)=>{
	return text.toUpperCase(text);
})

/*configure view Engine*/
app.set('view engine','hbs');

/*host static folder*/
app.use(express.static(__dirname+"/public"))

/*middle ware for logger*/
app.use((req,res,next)=>{

	var date=new Date().toString();
	console.log(`${date}: ${req.method} ${req.url}`);
	next();
})

/*middle ware for maintance page*/
// app.use((req,res,next)=>{

// 	res.render('maintance.hbs');
// })



app.get("/",(req,res)=>{

	res.render('home.hbs',{
		pageTitle:"Home Page",
		WelcomeMessage:"Welcome to my Website"
	})
});



app.get("/about",(req,res)=>{

	res.render('about.hbs',{
		pageTitle:"About Page"
	});
});



app.listen(3000,()=>{
	console.log("Server Started pn port 3000!!!")
})