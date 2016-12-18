var mongoose = require('mongoose');
var GItemM = require('./models/GItemM.js')

mongoose.connect('mongodb://localhost/grocery', function(){


  mongoose.connection.db.dropDatabase();

  var items = [
              {
                name:'Ice Cream'
              },
              {
                name:'waffles'
              },
              {
                name:'Candy',
                purchases:true
              },
              {
                name:'Snarks'
              }
              ];

    items.forEach(function(item){
        new GItemM(item).save();
    })

  console.log('connected ..');
})
