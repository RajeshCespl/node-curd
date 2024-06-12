const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userModel = require('./usermodel');
app.get('/', async (req ,res)=>{
    const users = await userModel.find();
    res.render('index',{ users });
})
app.post('/create', async (req ,res)=>{
     await userModel.create({
        email : req.body.email,
        username : req.body.username
    })
    res.redirect('/');
})

app.get('/delete/:id', async (req ,res)=>{
    await userModel.findOneAndDelete({id: req.body.id})
    res.redirect('/');
})
app.get('/edit/:id', async (req, res) => {
    const user = await userModel.findOne({ _id: req.params.id });
    res.render('edit', { user });
});

app.post('/update/:id', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;

    await userModel.findOneAndUpdate({_id:req.params.id }, { email, username });
    res.redirect('/');
});

app.listen(3000);   