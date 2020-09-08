require('./init')

const path = require('path')
const express = require('express');
const app = express();

const articlesRouter = require('./routes/products.js');


app.use('/', (req,res, next) => {
    console.log('main:index.js app.use(/) ')
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use( express.json() );

app.use('/articles', articlesRouter )

app.use(( error, req, res) => {
    res.status( error.status || 500 ).send( error );
});

app.set('port', process.env.PORT || 4201)
var server = app.listen(app.get('port'), function () {
 console.log(`server started on port ${app.get('port')} `)
})

