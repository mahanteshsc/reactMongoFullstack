var dispatcher = require('./../dispatcher.js');
var rest = require('./../helper/RestHelper.js');

function GItemStore(){
    var items = [];
    var listners = [];

    rest.get('/api/items')
       .then(function(data){
          items = data;
          triggerListners();
       })


    function getItems(){
      return items;
    }

    function onChange(listner){
      listners.push(listner);
    }

    function triggerListners(){
      listners.forEach(function(listner){
          listner(items);
      })
    }

    function addGItem(item){
      items.push(item);
      triggerListners();
      rest.post('/api/items', item);
    }

    function setGItemBought(item, flag){
      item.purchases = flag || false;
      triggerListners();
      rest.patch('/api/items/'+item._id, item); 
    }

    function deleteGItem(item){

      var index;
      items.filter(function(_item, _index){
        if(_item.name == item.name){
            index = _index;
        }
      });
      items.splice(index,1);
      triggerListners();
      rest.del('/api/items/'+item._id);

    }

    dispatcher.register(function(event){
    console.log(' dispatcher event '+event.type)
      var split = event.type.split(':');
      if(split[0]==='grocery-item'){
        switch(split[1]){
            case 'add' :  addGItem(event.payload);
                             break;
            case 'delete' :  deleteGItem(event.payload);
                             break;
            case 'buy' :  setGItemBought(event.payload, true);
                              break;
            case 'unbuy' :  setGItemBought(event.payload, false);
                              break;
        }
      }
    })

    return {
        "getItems" : getItems,
        "onChange" : onChange
    };
}

module.exports = new GItemStore();
