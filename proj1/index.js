const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const genres = [ 
    {id: 1, name:'Thrill'},
    {id: 2, name:'Sifi'},
    {id: 3, name:'Comedy'},
 ];


app.get('/',(req, res)=>{
res.sendFile(path.join(__dirname,'/home.html'));
});

app.get('/api/genre',(req, res)=>{
    res.send(genres);
});

app.post('/api/genre', (req, res)=>{
const genre = {
    id: genres.length + 1, name: req.body.name
};
genre.push(genre);
res.send(genre);
});

app.get('/api/genre/:id', (req, res)=>{

    const gen = genres.find( c=>c.id === parseInt(req.params.id));
    if(!gen) res.status(404).send('Error 404 not found');

    res.send(gen);
});



const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});