/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));
<<<<<<< HEAD
api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);
=======

>>>>>>> f12b339f3d6073925b0727a6d9ee00d59e39fe22
