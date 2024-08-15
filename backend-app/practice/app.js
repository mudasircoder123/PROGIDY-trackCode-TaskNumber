const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.get('/',(req,res) => {
res.cookie("name","mudasir");
res.send('done');
});
app.get('/read',(req,res) => {
 res.send('read ');
 console.log(req.cookies);
});
app.listen(3700);