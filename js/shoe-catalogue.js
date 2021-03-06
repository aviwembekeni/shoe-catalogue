function ShoeCatalogue(){
  var shoes = [
        {id : 0, color : 'brown', brand : "Prada", size: 7, price : 350,  in_stock : 5},
        {id : 1, color : 'brown', brand : "Prada", size: 9, price : 490,  in_stock : 6},
        {id : 2, color: 'black', brand : "Tommy Helfiger", size: 7, price : 430,  in_stock : 7},
        {id : 3, color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2},
        {id : 4, color : 'brown', brand : "Tommy Helfiger", size: 7, price : 450,  in_stock : 10},
        {id : 5, color : 'brown', brand : "Tommy Helfiger", size: 8, price : 350,  in_stock : 11},
        {id : 6, color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
        {id : 7, color : 'white', brand : "Tommy Helfiger", size: 9, price : 350,  in_stock : 21},
        {id : 8, color : 'black', brand : "Kurt Geiger", size: 7, price : 400,  in_stock : 7},
        {id : 9, color : 'black', brand : "Kurt Geiger", size: 8, price : 410,  in_stock : 9},
        {id : 10, color : 'black', brand : "Kurt Geiger", size: 9, price : 415,  in_stock : 4},
        {id : 11, color : 'brown', brand : "Kurt Geiger", size: 7, price : 410,  in_stock : 3},
        {id : 12, color : 'brown', brand : "Kurt Geiger", size: 8, price : 420,  in_stock : 13},
        {id : 13, color : 'brown', brand : "Kurt Geiger", size: 9, price : 430,  in_stock : 12},
        {id : 14, color : 'white', brand : "Lacoste", size: 7, price : 400,  in_stock : 14},
        {id : 15, color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 17},
        {id : 16, color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
        {id : 17, color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
        {id : 18, color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
        {id : 19, color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
        {id : 20, color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
        {id : 21, color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
        {id : 22, color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
        {id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}

      ];

      var searchResults = [];

      var shoppingBasket = [];

      var shoppingBasketTotal = 0;

      function checkShoes(){
        var shoesCopy = [];

        for (var i = 0; i < shoes.length; i++) {
          shoesCopy.push(Object.create(shoes[i]))
        }

        return shoesCopy;
      }

      function filterShoesList(brand, color, size){
        var newArray = shoes.filter(function (shoe) {
          return shoe.brand == brand &&
                 shoe.color == color &&
                 shoe.size == size;
        });

        return newArray
      }

      function addSingleShoe(brand, color, size, price, in_stock){
         var shoeExist = false;
        shoes.map(shoe => {
          if(shoe.brand == brand && shoe.color == color && shoe.size == size){
            shoe.in_stock ++;
            shoeExist = true;
            return;
          }
        })

        if(!shoeExist){
          var shoe = {id : shoes.length+1, color : color, brand : brand, size: size, price : price,  in_stock : in_stock};
          shoes.push(shoe);

        }

      }

      function addToSearchResults(results){
        searchResults = results;

      }

      function checkSearchResults(){
        return searchResults;
      }

      function filterById(id){
        return shoes.filter(function (shoe) {
          return shoe.id == id;
        });
      }

      function addShoeToShoppingBasket(id){
        var exist = false;

        var shoes = filterById(id);

        var shoe = shoes[0];

      if(shoe.in_stock > 0){
        if (shoppingBasket.length > 0) {

          shoppingBasket.map(item =>{
            if (item.brand == shoe.brand && item.color == shoe.color && item.size == shoe.size) {
                item.stock ++;
                item.total = item.stock * item.price;
                exist = true;
            }
          })

          if (!exist) {
            var newShoe = {brand : shoe.brand, color: shoe.color, size: shoe.size, stock: 1, price: shoe.price, total:shoe.price};
            shoppingBasket.push(newShoe);
          }

        } else {
           var newShoe = {brand : shoe.brand, color: shoe.color, size: shoe.size, stock: 1, price: shoe.price, total:shoe.price};
           shoppingBasket.push(newShoe);
        }

        var currentShoes = filterShoesList(shoe.brand, shoe.color, shoe.size);
        var currentShoe = currentShoes[0];
        currentShoe.in_stock --;

        var shoppingBasketTotalAmount = 0;

        for (var i = 0; i < shoppingBasket.length; i++) {
          shoppingBasketTotalAmount +=  shoppingBasket[i].total;
        }

        shoppingBasketTotal = shoppingBasketTotalAmount;
        // find the shoe in stock and decrement the counter

      /*  shoes.map((currentShoeObj, i) => {
            if(currentShoeObj.brand === currentShoe.brand && currentShoeObj.color === currentShoe.color && currentShoeObj.size === currentShoe.size){

            //  currentShoeObj.in_stock --;

              //    console.log(currentShoe);

            }
          })*/

        }else{

        }



      }

      function checkShoppingBasket(){
        return shoppingBasket
      }

      function checkShoppingBasketTotal(){
        return shoppingBasketTotal;
      }

      function clearShoppingBasketList(){

        for (var i = 0; i < shoppingBasket.length; i++) {
          for (var j = 0; j < shoes.length; j++) {
            if (shoppingBasket[i].brand == shoes[j].brand &&
                shoppingBasket[i].color == shoes[j].color &&
                shoppingBasket[i].size == shoes[j].size) {
                  shoes[j].in_stock += shoppingBasket[i].stock;
            }
          }
        }

        var newSearchResults = [];

        searchResults.map(shoeResult => {
          var items = filterById(shoeResult.id);
          var item = items[0];
          newSearchResults.push(item);
        })

        searchResults = newSearchResults;

        shoppingBasket = [];
        shoppingBasketTotal = 0;


      }

      function filterByAny(searchParams){
          return _.filter(shoes, searchParams);
      }

  return {
    getShoes : checkShoes,
    filterShoes : filterShoesList,
    addShoe : addSingleShoe,
    addSearchResults : addToSearchResults,
    getSearchResults : checkSearchResults,
    addToShoppingBasket : addShoeToShoppingBasket,
    getShoppingBasket : checkShoppingBasket,
    getShoppingBasketTotatl : checkShoppingBasketTotal,
    clearShoppingBasket : clearShoppingBasketList,
    filterShoesByAny : filterByAny,
    filterShoesById : filterById
  }
}
