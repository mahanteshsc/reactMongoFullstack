var dispatcher = require('./../dispatcher.js');


module.exports = {
  add : function(item){
    dispatcher.dispatch({
        payload: item,
        type: "grocery-item:add"
    })
  },
  delete : function(item){
  console.log(' delete Action Create for '+item)
    dispatcher.dispatch({
        payload: item,
        type: "grocery-item:delete"
    })
  },
  buy : function(item){
  console.log(' buy Action Create for '+item)
    dispatcher.dispatch({
        payload: item,
        type: "grocery-item:buy"
    })
  },
  unbuy : function(item){
  console.log(' unbuy Action Create for '+item)
    dispatcher.dispatch({
        payload: item,
        type: "grocery-item:unbuy"
    })
  }

}
