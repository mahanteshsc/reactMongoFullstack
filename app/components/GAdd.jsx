var React = require('react/addons');
var actionCreator = require('./../actions/GItemAction.jsx');

module.exports = React.createClass({
    getInitialState : function(){
      return {input:""}
    },
    handleInputName: function(e){
      this.setState({input : e.target.value});
    },
    addItem : function(e){
        e.preventDefault();
        console.log('Adding Item! '+this.state.input);
        actionCreator.add({
          name : this.state.input
        });

        this.setState({input : ''});
    },
    render : function(){
        return (
          <div className="grocery-addItem">
              <form onSubmit={this.addItem}>
                <input value={this.state.input} onChange={this.handleInputName}></input>
                <button>Add Item</button>
              </form>
          </div>
        )
    }
})
