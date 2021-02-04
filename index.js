const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

connect.then((db) => {
    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Uthapizza',
        description: 'test',
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);
            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log(dishes);
            return Dishes.deleteMany({});
        })
        .then( () => {
            return mongoose.connection.close(); 
        })
        .catch((err) => {
            console.log(err);
        });
})
.catch((err) => console.log(err));