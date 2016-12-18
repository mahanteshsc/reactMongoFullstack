var mongoose = require('mongoose');

var GroceryItemSchema = {
    name:String,
    purchases: Boolean,
    id:String
}

var GItems = mongoose.model('GroceryItem', GroceryItemSchema,"GroceryItems");

module.exports = GItems;
