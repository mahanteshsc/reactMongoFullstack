var React = require('react/addons');
var actionC =require('./../actions/GItemAction.jsx');

module.exports = React.createClass({
  delete : function(e){
    e.preventDefault();
    actionC.delete(this.props.item);
  },
  togglePurchased : function(e){
    e.preventDefault();
    console.log(' togglePurchases '+this.props.item.purchases)
    if(this.props.item.purchases){
        actionC.unbuy(this.props.item);
    }else{
        actionC.buy(this.props.item);
    }
  },
  render : function(){
    return (
         <div className="grocery-item row">
             <div className="six columns">
               <h4 className={this.props.item.purchased ? "strikethrough" : "" }>
                 {this.props.item.name}
               </h4>
             </div>
             <form onSubmit={this.togglePurchased} className="three columns">
               <button className={this.props.item.purchases ? "" : "button-primary"}>{this.props.item.purchases ? "unbuy" : "buy"}</button>
             </form>
             <form className="three columns" onSubmit={this.delete}>
               <button>&times;</button>
             </form>
        </div>
    )
  }
})
