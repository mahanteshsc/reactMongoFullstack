console.log('hellow world JSX! ')
var React = require('react/addons');

var GList = require('./components/GroList.jsx');
var gItemStore = require('./store/GItemStore.jsx');

var initial =  gItemStore.getItems();
function render(){
  React.render( <GList items={initial}/>, app);
}

gItemStore.onChange(function(items){
    initial = items;
    render();
})

render();

console.log('Finished rendering component ')
