
// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').parse()
// }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authorRouter=require('./routes/authors')
const bookRouter=require('./routes/books')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))



const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mybrary", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',function(){
    console.log('Connection has made.');
}).on('error',function(error){
    console.log('error is: ',error);
});



app.use('/', indexRouter)
app.use('/authors',authorRouter)
app.use('/books',bookRouter)

app.listen(process.env.PORT || 3000)

console.log("Ashikur Rahman Rashid")