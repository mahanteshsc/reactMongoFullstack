 var guid = require('guid')
 var listners = []

 module.exports = {
   register : function(cb){
     var id = guid.raw();
     listners[id] = cb;
     return id;
   },
   dispatch : function(payload){
     console.info(' dispaching ',payload);
     for(var id in listners){
       var listner = listners[id];
          listner(payload);
     }
   }
 }
