var React = require('react/addons');
var GItem = require('./GroItem.jsx');
var GAdd = require('./GAdd.jsx');

module.exports = React.createClass({
  render : function(){
    return (
      <div>
          <h1> Grocery Listify </h1>
          <div>
            {
              this.props.items.map(function(item, index){
                  return(
                      <GItem item={item} key={'item'+index}/>
                  )
              })
            }
          </div>
          <GAdd />
      </div>
    )
  }
})
