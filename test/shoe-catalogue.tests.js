var shoes = [
      { color : 'brown', brand : "Prada", size: 7, price : 350,  in_stock : 5},
      { color : 'brown', brand : "Prada", size: 9, price : 490,  in_stock : 6},
      { color : 'black', brand : "Tommy Helfiger", size: 7, price : 430,  in_stock : 7},
      { color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2},
      { color : 'brown', brand : "Tommy Helfiger", size: 7, price : 450,  in_stock : 10},
      { color : 'brown', brand : "Tommy Helfiger", size: 8, price : 350,  in_stock : 11},
      { color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
      { color : 'white', brand : "Tommy Helfiger", size: 9, price : 350,  in_stock : 21},
      { color : 'black', brand : "Kurt Geiger", size: 7, price : 400,  in_stock : 7},
      { color : 'black', brand : "Kurt Geiger", size: 8, price : 410,  in_stock : 9},
      { color : 'black', brand : "Kurt Geiger", size: 9, price : 415,  in_stock : 4},
      { color : 'brown', brand : "Kurt Geiger", size: 7, price : 410,  in_stock : 3},
      { color : 'brown', brand : "Kurt Geiger", size: 8, price : 420,  in_stock : 13},
      { color : 'brown', brand : "Kurt Geiger", size: 9, price : 430,  in_stock : 12},
      { color : 'white', brand : "Lacoste", size: 7, price : 400,  in_stock : 14},
      { color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 17},
      { color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
      { color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
      { color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
      { color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
      { color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
      { color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
      { color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
      { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}

    ];

describe('checkShoes', function() {

    it('should return list of shoes.', function() {
      var shoeCatalogue = ShoeCatalogue();

      assert.deepEqual(shoes, shoeCatalogue.getShoes());
    });


});

describe('filterShoesList', function() {

    it('should filter shoes by brand, color and size.', function() {
      var shoeCatalogue = ShoeCatalogue();


          var shoe = [{ color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2}]

      assert.deepEqual(shoe, shoeCatalogue.filterShoes("Tommy Helfiger", "black", 8));
    });

    it('should filter shoes by brand, color and size and return empty list if the shoe that has the passed properties is not in stock.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = []

      assert.deepEqual(shoe, shoeCatalogue.filterShoes("Prada", "black", 8));
    });


});

describe('addSingleShoe', function() {

    it('should add a shoe to the stock.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoesWithAddedShoe = [
            { color : 'brown', brand : "Prada", size: 7, price : 350,  in_stock : 5},
            { color : 'brown', brand : "Prada", size: 9, price : 490,  in_stock : 6},
            { color : 'black', brand : "Tommy Helfiger", size: 7, price : 430,  in_stock : 7},
            { color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2},
            { color : 'brown', brand : "Tommy Helfiger", size: 7, price : 450,  in_stock : 10},
            { color : 'brown', brand : "Tommy Helfiger", size: 8, price : 350,  in_stock : 11},
            { color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
            { color : 'white', brand : "Tommy Helfiger", size: 9, price : 350,  in_stock : 21},
            { color : 'black', brand : "Kurt Geiger", size: 7, price : 400,  in_stock : 7},
            { color : 'black', brand : "Kurt Geiger", size: 8, price : 410,  in_stock : 9},
            { color : 'black', brand : "Kurt Geiger", size: 9, price : 415,  in_stock : 4},
            { color : 'brown', brand : "Kurt Geiger", size: 7, price : 410,  in_stock : 3},
            { color : 'brown', brand : "Kurt Geiger", size: 8, price : 420,  in_stock : 13},
            { color : 'brown', brand : "Kurt Geiger", size: 9, price : 430,  in_stock : 12},
            { color : 'white', brand : "Lacoste", size: 7, price : 400,  in_stock : 14},
            { color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 17},
            { color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
            { color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
            { color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
            { color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
            { color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
            { color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
            { color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
            { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31},
            { color : 'white', brand : "Prada", size: 9, price : 440,  in_stock : 31}

          ];

          shoeCatalogue.addShoe("Prada", 'white', 9, 440, 31);

          assert.deepEqual(shoesWithAddedShoe, shoeCatalogue.getShoes());
    });

    it('should increment in_stock value by one if shoe already exists.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoesWithAddedShoeInStockIncremented = [
            { color : 'brown', brand : "Prada", size: 7, price : 350,  in_stock : 5},
            { color : 'brown', brand : "Prada", size: 9, price : 490,  in_stock : 6},
            { color : 'black', brand : "Tommy Helfiger", size: 7, price : 430,  in_stock : 7},
            { color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2},
            { color : 'brown', brand : "Tommy Helfiger", size: 7, price : 450,  in_stock : 10},
            { color : 'brown', brand : "Tommy Helfiger", size: 8, price : 350,  in_stock : 11},
            { color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
            { color : 'white', brand : "Tommy Helfiger", size: 9, price : 350,  in_stock : 21},
            { color : 'black', brand : "Kurt Geiger", size: 7, price : 400,  in_stock : 7},
            { color : 'black', brand : "Kurt Geiger", size: 8, price : 410,  in_stock : 9},
            { color : 'black', brand : "Kurt Geiger", size: 9, price : 415,  in_stock : 4},
            { color : 'brown', brand : "Kurt Geiger", size: 7, price : 410,  in_stock : 3},
            { color : 'brown', brand : "Kurt Geiger", size: 8, price : 420,  in_stock : 13},
            { color : 'brown', brand : "Kurt Geiger", size: 9, price : 430,  in_stock : 12},
            { color : 'white', brand : "Lacoste", size: 7, price : 400,  in_stock : 14},
            { color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 18},
            { color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
            { color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
            { color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
            { color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
            { color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
            { color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
            { color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
            { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}

          ];

          shoeCatalogue.addShoe("Lacoste", 'white', 8, 440, 13);

          assert.deepEqual(shoesWithAddedShoeInStockIncremented, shoeCatalogue.getShoes());
    });


});

describe('checkSearchResults', function() {

    it('should return search results.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoe = { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31};

      shoeCatalogue.addSearchResults(shoe);

      assert.deepEqual(shoe, shoeCatalogue.getSearchResults());
    });

    it('should return empty map if search results do not exist.', function() {
      var shoeCatalogue = ShoeCatalogue();

      assert.deepEqual({}, shoeCatalogue.getSearchResults());
    });


});


describe('checkSearchResults', function() {

    it('should return search results.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoe = { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31};

      shoeCatalogue.addSearchResults(shoe);

      assert.deepEqual(shoe, shoeCatalogue.getSearchResults());
    });

    it('should return empty map if search results do not exist.', function() {
      var shoeCatalogue = ShoeCatalogue();

      assert.deepEqual({}, shoeCatalogue.getSearchResults());
    });


});

describe('addShoeToShoppingBasket', function() {

    it('should return shopping basket list.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 1, total:440 };
          var shoesList = [shoe];

          shoeCatalogue.addToShoppingBasket({ color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31});

          assert.deepEqual(shoesList, shoeCatalogue.getShoppingBasket());
    });

    it('should return shoes with in_stock less by number of stock added to shopping basket list.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoesWithAddedToBasketShoeInStockDecremented = [
            { color : 'brown', brand : "Prada", size: 7, price : 350,  in_stock : 5},
            { color : 'brown', brand : "Prada", size: 9, price : 490,  in_stock : 6},
            { color : 'black', brand : "Tommy Helfiger", size: 7, price : 430,  in_stock : 7},
            { color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2},
            { color : 'brown', brand : "Tommy Helfiger", size: 7, price : 450,  in_stock : 10},
            { color : 'brown', brand : "Tommy Helfiger", size: 8, price : 350,  in_stock : 11},
            { color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
            { color : 'white', brand : "Tommy Helfiger", size: 9, price : 350,  in_stock : 21},
            { color : 'black', brand : "Kurt Geiger", size: 7, price : 400,  in_stock : 7},
            { color : 'black', brand : "Kurt Geiger", size: 8, price : 410,  in_stock : 9},
            { color : 'black', brand : "Kurt Geiger", size: 9, price : 415,  in_stock : 4},
            { color : 'brown', brand : "Kurt Geiger", size: 7, price : 410,  in_stock : 3},
            { color : 'brown', brand : "Kurt Geiger", size: 8, price : 420,  in_stock : 13},
            { color : 'brown', brand : "Kurt Geiger", size: 9, price : 430,  in_stock : 12},
            { color : 'white', brand : "Lacoste", size: 7, price : 400,  in_stock : 14},
            { color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 17},
            { color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
            { color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
            { color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
            { color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
            { color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
            { color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
            { color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
            { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 30}

          ];

          var shoe = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 1, total:440 };

          shoeCatalogue.addToShoppingBasket(shoe);

          assert.deepEqual(shoesWithAddedToBasketShoeInStockDecremented, shoeCatalogue.getShoes());
    });

    it('should increment stock when the same shoe is added to the shopping basket more than once and the total for each shoe should be stock* price.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 2, total:880 };

          var shoesList = [shoe]
          shoeCatalogue.addToShoppingBasket({ color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 30});
          shoeCatalogue.addToShoppingBasket({ color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 29});

          assert.deepEqual(shoesList, shoeCatalogue.getShoppingBasket());
    });

    it("should add shoe to the shopping backet list's new index if the shoe does not already exist in the shopping basket list.", function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe1 = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 1, total:440 };
          var shoe2 = {brand: "Lacoste", color: 'brown', price: 410, size: 9, stock: 1, total:410 };
          var shoesList = [shoe1, shoe2];

          shoeCatalogue.addToShoppingBasket({ color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31});
          shoeCatalogue.addToShoppingBasket({ color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25});

          assert.deepEqual(shoesList, shoeCatalogue.getShoppingBasket());
    });

    it("should return shopping basket total.", function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe1 = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 1, total:440 };
          var shoe2 = {brand: "Lacoste", color: 'brown', price: 410, size: 9, stock: 1, total:410 };

          shoeCatalogue.addToShoppingBasket({ color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31});
          shoeCatalogue.addToShoppingBasket({ color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25});

          assert.deepEqual(shoe1.total + shoe2.total, shoeCatalogue.getShoppingBasketTotatl());
    });

});
