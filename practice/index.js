const express = require('express');
const app = express();

app.use(express.json);

const course = [{id:'1', name:'First'},
                {id:'2', name:'Second'},];

app.get('/', (req, res)=>{
res.send('Welcome To the Home');
});

app.get('/api/core/:id', (req, res)=>{

const cor = course.find(x => x.id === req.params.id);
if(!cor) res.status(404).send('404 Error');

});


app.listen(3000, ()=>{
    console.log('listening in port 3000');
} );
