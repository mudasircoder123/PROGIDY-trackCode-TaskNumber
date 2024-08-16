const express = require('express');
const jwt = express();

jwt.get('/',(req,res)=> {
res.send('hii backend')
});

jwt.listen(3500,() => {
console.log('server running')
});
