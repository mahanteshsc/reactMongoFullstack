

module.exports = function(app){

    var GItemM = require('./../models/GItemM.js');


      app.route('/api/items')
      .get(function(req,res){
        GItemM.find(function(error, doc){
          res.send(doc);

        });
      })
      .post(function(req, res){
          var itm = req.body;
          var gItem = GItemM(itm);
          gItem.save(function(error, data){
            res.status(300).send();
          });
      });


      app.route('/api/items/:id')
      .delete(function(req, res){
          GItemM.findOne({
                _id : req.param.id
          }).remove(function(x){
            console.log('removed '+x);
          });

      }).patch(function(req, res){
        GItemM.findOne({
          _id : req.body._id
        }, function(error, doc){
          console.log(error);  
          for(var key in req.body){
            doc[key] = req.body[key];
          }
            doc.save();
            res.status(200).send();
        })
      })

}
