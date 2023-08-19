const express = require('express');
const { StatusCodes } = require('http-status-codes')

const app = express();
const port = 3003;

const server = app.listen(port, () => console.log('Server listen on port: '+ port));

app.set('view engine', 'pug');
app.set('views','views');
app.get('/', (req,res,next) => {
    res.status(StatusCodes.OK).render('home');
})
 // template engines : 
 //it is just a way of using templte files to create a
 // webpage or to show the content

 /*
 so template engines is just a noraml html page which has place holders,
 for a bunch of  data we are going to pass from our server.
 it is used to show the content frm the webapp
 we use  : Pug
 */
 