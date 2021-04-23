const express =  require('express');
const app = new express();

// app.get('/', (req, res) => {
//     res.send('hi');
// });

app.use(require('./routes'));

app.listen(3000, ()=>{console.log('listening')});






