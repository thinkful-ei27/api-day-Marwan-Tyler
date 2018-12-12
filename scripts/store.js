/* global Item */
'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };


  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData){
    const foundItem = this.items.find(item => item.id === id)
    Object.assign(foundItem,newData);
  }

 

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    findAndUpdate
  };
  
}());
