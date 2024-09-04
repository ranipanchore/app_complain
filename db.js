const mongoose = require('mongoose')

function connect () {
    mongoose.set('useCreateIndex', true);
    // mongoose.connect('mongodb://localhost/complaintapp',{useNewUrlParser: true})
     mongoose.connect('mongodb+srv://panchorerani1:uu4cjdj3BBdMNqUo@tododb.rvfuohx.mongodb.net/et/',{useNewUrlParser: true})
    
   
}

module.exports = connect
