const express=require('express');
const port=process.env.port || 3000;
const app=express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const path=require('path');
const hbs=require('hbs');
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended: false}));
app.use(express.static(mypublic));
app.set("view engine","hbs");
hbs.registerPartials(mypartials)
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu123@work.eqglgeu.mongodb.net/test');
// console.log("data connected");
}
const kittySchema = new mongoose.Schema({
    ProductName:String,
    ProductDetails:String,
    Productdetails:String,
    Price:String,
    Category:String,
    photo:String

  });
const Kitten = mongoose.model('Kitten', kittySchema);
app.get("/",async(req,res)=>{
var Category="Male"
const data=await Kitten.find({Category}).limit(4)

Category="female"
const mydata=await Kitten.find({Category}).limit(4)
Category="kid"
const kiddata=await Kitten.find({Category})
Category="mobile"
const mobile=await Kitten.find({Category}).limit(4)
res.render("index",{data,mydata,kiddata,mobile})
});


app.get("/men",async(req,res)=>{
var Category="Male"
const data=await Kitten.find({Category})
res.render("men",{data})
})



app.get("/women",async(req,res)=>{
Category="female"
const mydata=await Kitten.find({Category})
res.render("women",{mydata})
})

app.get("/kid",async(req,res)=>{
Category="kid"
const kiddata=await Kitten.find({Category})
res.render("kid",{kiddata})
})


app.get("/mobile",async(req,res)=>{
Category="mobile"
const mobile=await Kitten.find({Category})
res.render("mobile",{mobile})
})


app.get("/addproduct",(req,res)=>{
const params={}
res.render("addproduct")

})
app.post('/addproduct',upload.single('photo'), function (req, res, next) {
const silence = new Kitten({ 
  ProductName:req.body.ProductName,
  ProductDetails:req.body.ProductDetails,
  // Productdetails:req.body.Productdetails,
  Price:req.body.Price,
  Category:req.body.Category,
  photo:req.body.photo


});
silence.save()
res.render("addproduct")
})


app.get("/product/:id",async(req,res)=>{
    const id=req.params.id
    const data=await Kitten.findById(id)
    res.render("product",data)
})





app.listen(port,(req,res)=>{

console.log("Running on port 3000")



})
