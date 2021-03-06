const Joi = require('joi'); // it returns a class that's why const is capital J 
const express = require('express');
const { isError } = require('joi');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];



 
app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.post('/api/courses', (req,res)=>{
 
    // schema
    const schema =  Joi.object({
        name: Joi.string().min(3).required(),
      
    });
   
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
 
 
    const course = {
     id: courses.length + 1,
     name: req.body.name
 };
 courses.push(course);
 res.send(course);
});
 

app.get('/api/courses/:id',(req, res)=>{

    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Error 404 not found');

    res.send(course);
});
 



const port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`Listening at ${port}`);} );
