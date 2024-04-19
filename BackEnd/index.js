const port=5000
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const path=require('path')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://umar:umar123@cluster0.assxzcy.mongodb.net/")

//SCHEMA

const image_schema= new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    new_price:{type:Number,required:true},
    old_price:{type:Number,required:true},
    date:{type: Date,default:Date.now },
    available:{type:Boolean,default:true}
})

const user_schema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    // isAdmin:{type:Boolean,default:false},
    date:{type: Date,default:Date.now },
    cartData:{type: Object}
})
const Product= mongoose.model("Product",image_schema)
const User=mongoose.model("Users",user_schema)
app.post("/addproduct",async(req,res)=>{
    let products= await Product.find({})
    let id
    if(products.length > 0){
        let last_prod_array= products.slice(-1)[0]
        id= last_prod_array.id+1
    }
    else{
        id=1
    }
    const product= new Product({
        id:id,
        name: req.body.name, 
        image: req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product);
    await product.save({maxTimeMS:30000});
    console.log("saved")
    res.json({
        success:true,
        name:req.body.name
    })
})

app.get('/newcollection',async(req,res)=>{
    let newprods= await Product.find({});
    let newcoll=newprods.slice(1).slice(-8);
    res.send(newcoll)

})

const fetchuser=async(req,res,next)=>{
    const token=req.header('auth-token');
    
    if(token){
        try {
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next()
        } catch (error) {
            req.status(401).send({
                'success':false,
                'error':'Invalid credentials'
            })
        }

    }
    else{
        res.status(401).send({
            'success':false,
            'error':'Log in first'
        })
    }
}

app.post('/addtocart',fetchuser,async(req,res)=>{
    console.log("Added",req.body.id)
    let user=await User.findOne({_id:req.user.id});
    user.cartData[req.body.id]+=1;
    await User.findByIdAndUpdate({_id:req.user.id},{cartData:user.cartData})
    res.send("added")

})

app.post('/getcartdata',fetchuser,async(req,res)=>{
    let user=await User.findOne({_id:req.user.id});
    res.json(user.cartData)
})

app.post('/removefromcart',fetchuser,async(req,res)=>{
    console.log("Removed",req.body.id)
    let user=await User.findOne({_id:req.user.id});
    if(user.cartData[req.body.id]>0)
    {    user.cartData[req.body.id]-=1;
    await User.findByIdAndUpdate({_id:req.user.id},{cartData:user.cartData})
    res.send("Removed")}
    else{
        res.send("invalid operation")
    }

})
app.post('/login',async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(user){
        if(req.body.password===user.password){
            const data={
                user:{
                    id:user.id
                }
                
            }
            let token= jwt.sign(data,'secret_ecom');
            res.json({
                success:true,
                token:token
            })
        }else{
            res.json({
                'success':false,
                'error':'Invalid credentials'
            })
        }
    }
    else{
        res.json({
            'success':false,
            'error':'User not found'
        })
    }
})

app.post('/signup',async(req,res)=>{
    let check= await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({
            success:false,
            error:"Email already registered"
        })
    }
    let cart={}
    for (let index = 0; index < 300; index++) {
        cart[index]=0
    }
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })
    await user.save({maxTimeMS:30000});
    const data={
        user:{
            id:user.id
        }
    }   
    const token= jwt.sign(data,'secret_ecom');
    res.json({
        success:true,
        token:token
    })


})

app.get('/getproducts',async(req,res)=>{
    let products= await Product .find({})
    // console.log("Fetched")
    // console.log(products)
    res.send(products)
})

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Item deleted")
    res.send({
        success:true,
        name:req.body.name
    })
})
app.get("/",(req,res)=>{
    res.send("server is running")
})

const storage= multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }    
})

const upload=multer({
    storage:storage
})
app.get('/popular',async(req,res)=>{
    let popular= await Product.find({category:'women'})
    let popular_in= popular.slice(0,3);
    res.send(popular_in)
})
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
     res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
     })
})




app.listen(port,(e)=>{
    if (!e)
    {
        console.log("server is running on port 5000")
    }
    else{
        console.log(e)
    }
})
