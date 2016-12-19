(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItems = this;

  buyItems.get = function(){
     return ShoppingListCheckOffService.getitemsToBuy();
   }

  buyItems.bought = function (index) {
    ShoppingListCheckOffService.addItemBought(index);
  }

  buyItems.msgShow = function() {
      return ShoppingListCheckOffService.itemsToBuyMsgShow();
    }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.get = function(){
     return ShoppingListCheckOffService.getitemsBought();
   }
   boughtItems.msgShow = function() {
      return ShoppingListCheckOffService.boughtItemsMsgShow();
    }
};


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsBought = [];
  var itemsToBuy = [{name: "cookies", quantity: 10},
  {name: "Bier", quantity: 1},
  {name: "Oranges", quantity: 5},
  {name: "Bannana", quantity: 3},
  {name: "Coca Cola", quantity: 2}];

  service.addItemBought = function (index) {
    var item = {
      name: itemsToBuy[index].name,
      quantity:  itemsToBuy[index].quantity
    };
    itemsBought.push(item);
    itemsToBuy.splice(index, 1);
  };

  service.getitemsBought = function () {
      return itemsBought;
  };

  service.getitemsToBuy = function () {
      return itemsToBuy;
  };

  service.boughtItemsMsgShow = function() {
      if (itemsBought.length == 0) return true;
      else return false;
  };

  service.itemsToBuyMsgShow = function() {
    if (itemsToBuy.length == 0) return true;
    else return false;
  };

  };

})();


// (function () {
// 'use strict';
//
// angular.module('ShoppingListCheckOff', [])
// .controller('ToBuyController',ToBuyController)
// .controller('AlreadyBoughtController',AlreadyBoughtController)
// .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
//
// ToBuyController.$inject = ['ShoppingListCheckOffService'];
// function ToBuyController(ShoppingListCheckOffService) {
//   var predefinedItems = [{name: "cookies", quantity: 10},
//   {name: "Chocolate", quantity: 1},
//   {name: "Bier", quantity: 5},
//   {name: "Bannana", quantity: 3},
//   {name: "Coca Cola", quantity: 2}];
//   var buyItems = this;
//
//   buyItems.getPreDefinedList = predefinedItems;
//   function() {return predefinedItems}
//  itemAdder.addItem = function () {
//    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//   }
// }


// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
// function AlreadyBoughtController(ShoppingListCheckOffService) {
//   var showList = this;
//
//   showList.items = ShoppingListService.getItems();
//
//   showList.removeItem = function (itemIndex) {
//     ShoppingListService.removeItem(itemIndex);
//   };
// }











  // function DisplayMessageColor(color)
  // {
  //   $scope.customStyle = {"color":color};
  //   $scope.borderstyle = {
  //     "border-color":color,
  //     "color":color
  //   };
  // };


  // function ShoppingListCheckOffService() {
  //   var service = this;
  //
  //   // List of shopping items
  //   var items = [];
  //
  //   service.addItem = function (itemName, quantity) {
  //     var item = {
  //       name: itemName,
  //       quantity: quantity
  //     };
  //     items.push(item);
  //   };
  //
  //   service.removeItem = function (itemIdex) {
  //     items.splice(itemIdex, 1);
  //   };
  //
  //   service.getItems = function () {
  //     return items;
  //   };
  // }


// };
// })();
