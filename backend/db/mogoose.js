const mongoose =require('mongoose');


const mongourl='mongodb://localhost:27017/new';
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('mongodb connected'))
    .catch(err=>{console.log(err)});

