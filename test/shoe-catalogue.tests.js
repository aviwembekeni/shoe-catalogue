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

describe('checkShoes', function() {

    it('should return list of shoes.', function() {
      var shoeCatalogue = ShoeCatalogue();

      assert.deepEqual(shoes, shoeCatalogue.getShoes());
    });


});

describe('filterShoesList', function() {

    it('should filter shoes by brand, color and size.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = [{id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}]

      assert.deepEqual(shoe, shoeCatalogue.filterShoes("Tommy Helfiger", "black", 9));
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
        {id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31},
        {id : 25, color : 'white', brand : "Prada", size: 9, price : 440,  in_stock : 31}

          ];

          shoeCatalogue.addShoe("Prada", 'white', 9, 440, 31);

          assert.deepEqual(shoesWithAddedShoe, shoeCatalogue.getShoes());
    });

    it('should increment in_stock value by one if shoe already exists.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoesWithAddedShoeInStockIncremented = [
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
        {id : 15, color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 18},
        {id : 16, color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
        {id : 17, color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
        {id : 18, color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
        {id : 19, color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
        {id : 20, color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
        {id : 21, color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
        {id : 22, color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
        {id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}

          ];

          shoeCatalogue.addShoe("Lacoste", 'white', 8, 440, 13);

          assert.deepEqual(shoesWithAddedShoeInStockIncremented, shoeCatalogue.getShoes());
    });


});

describe('checkSearchResults', function() {

    it('should return search results.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoe = [{id : 15, color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 18},
                  {id : 16, color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
                  {id : 17, color : 'black', brand : "Lacoste", size: 7, price : 400,  in_stock : 16},
                  {id : 18, color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
                  {id : 19, color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
                  {id : 20, color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
                  {id : 21, color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
                  {id : 22, color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25}];

      shoeCatalogue.addSearchResults(shoe);

      assert.deepEqual(shoe, shoeCatalogue.getSearchResults());
    });

    it('should return empty list if search results do not exist.', function() {
      var shoeCatalogue = ShoeCatalogue();

      assert.deepEqual([], shoeCatalogue.getSearchResults());
    });


});

describe('addShoeToShoppingBasket', function() {

    it('should return shopping basket list.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 1, total:440 };
          var shoesList = [shoe];

          shoeCatalogue.addToShoppingBasket(23);

          assert.deepEqual(shoesList, shoeCatalogue.getShoppingBasket());
    });

    it('should return shoes with in_stock less by number of stock added to shopping basket list.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var shoesWithAddedToBasketShoeInStockDecremented = [
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
        {id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 30}

          ];

          var shoe = { color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31};

          shoeCatalogue.addToShoppingBasket(23);

          assert.deepEqual(shoesWithAddedToBasketShoeInStockDecremented, shoeCatalogue.getShoes());
    });

    it('should increment stock when the same shoe is added to the shopping basket more than once and the total for each shoe should be stock* price.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 2, total:880 };

          var shoesList = [shoe]
          shoeCatalogue.addToShoppingBasket(23);
          shoeCatalogue.addToShoppingBasket(23);

          assert.deepEqual(shoesList, shoeCatalogue.getShoppingBasket());
    });

    it("should add shoe to the shopping backet list's new index if the shoe does not already exist in the shopping basket list.", function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe1 = {brand: "Tommy Helfiger", color: 'black', price: 440, size: 9, stock: 1, total:440 };
          var shoe2 = {brand: "Lacoste", color: 'brown', price: 410, size: 9, stock: 1, total:410 };
          var shoesList = [shoe1, shoe2];

          shoeCatalogue.addToShoppingBasket(23);
          shoeCatalogue.addToShoppingBasket(22);

          assert.deepEqual(shoesList, shoeCatalogue.getShoppingBasket());
    });

    it("should return shopping basket total.", function() {
      var shoeCatalogue = ShoeCatalogue();

          shoeCatalogue.addToShoppingBasket(23);
          shoeCatalogue.addToShoppingBasket(22);

          assert.deepEqual(850, shoeCatalogue.getShoppingBasketTotatl());
    });

});

describe('clearShoppingBasket', function() {

    it('should return an empty shopping basket.', function() {
      var shoeCatalogue = ShoeCatalogue();

      shoeCatalogue.addToShoppingBasket(23);
      shoeCatalogue.addToShoppingBasket(22);

      shoeCatalogue.clearShoppingBasket();

      assert.deepEqual([], shoeCatalogue.getShoppingBasket());
    });

    it('should return original shoes data set before items were added to the basket.', function() {
      var shoeCatalogue = ShoeCatalogue();

      shoeCatalogue.addToShoppingBasket(23);
      shoeCatalogue.addToShoppingBasket(22);

      shoeCatalogue.clearShoppingBasket();

      assert.deepEqual(shoes, shoeCatalogue.getShoes());
    });

    it('should return 0 as shoppingBasketTotal.', function() {
      var shoeCatalogue = ShoeCatalogue();

      shoeCatalogue.addToShoppingBasket(23);
      shoeCatalogue.addToShoppingBasket(22);

      assert.equal(850, shoeCatalogue.getShoppingBasketTotatl())

      shoeCatalogue.clearShoppingBasket();

      assert.equal(0, shoeCatalogue.getShoppingBasketTotatl());
    });


});

describe('filterById', function() {

    it('should filter shoes by id.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = [{id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}]

      assert.deepEqual(shoe, shoeCatalogue.filterShoesById(23));
    });

    it('should filter shoes by id and return empty list if the shoe that has the passed id is not in stock.', function() {
      var shoeCatalogue = ShoeCatalogue();

          var shoe = []

      assert.deepEqual(shoe, shoeCatalogue.filterShoesById(24));
    });


});

describe('filterByAny', function() {

    it('should filter shoes by brand.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var filteredShoes = [{id : 0, color : 'brown', brand : "Prada", size: 7, price : 350,  in_stock : 5},
                  {id : 1, color : 'brown', brand : "Prada", size: 9, price : 490,  in_stock : 6}]

      assert.deepEqual(filteredShoes, shoeCatalogue.filterShoesByAny({brand: "Prada"}));
    });

    it('should filter shoes by color.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var filteredShoes = [{id : 6, color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
                            {id : 7, color : 'white', brand : "Tommy Helfiger", size: 9, price : 350,  in_stock : 21},
                            {id : 14, color : 'white', brand : "Lacoste", size: 7, price : 400,  in_stock : 14},
                            {id : 15, color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 17},
                            {id : 16, color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19}]

      assert.deepEqual(filteredShoes, shoeCatalogue.filterShoesByAny({color: "white"}));
    });

    it('should filter shoes by size.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var filteredShoes = [{id : 3, color : 'black', brand : "Tommy Helfiger", size: 8, price : 439,  in_stock : 2},
                            {id : 5, color : 'brown', brand : "Tommy Helfiger", size: 8, price : 350,  in_stock : 11},
                            {id : 6, color : 'white', brand : "Tommy Helfiger", size: 8, price : 410,  in_stock : 15},
                            {id : 9, color : 'black', brand : "Kurt Geiger", size: 8, price : 410,  in_stock : 9},
                            {id : 12, color : 'brown', brand : "Kurt Geiger", size: 8, price : 420,  in_stock : 13},
                            {id : 15, color : 'white', brand : "Lacoste", size: 8, price : 410,  in_stock : 17},
                            {id : 18, color : 'black', brand : "Lacoste", size: 8, price : 400,  in_stock : 18},
                            {id : 21, color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22}]

      assert.deepEqual(filteredShoes, shoeCatalogue.filterShoesByAny({size: 8}));
    });

    it('should filter shoes by brand and color.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var filteredShoes = [{id : 20, color : 'brown', brand : "Lacoste", size: 7, price : 400,  in_stock : 21},
                            {id : 21, color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
                            {id : 22, color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25}]

      assert.deepEqual(filteredShoes, shoeCatalogue.filterShoesByAny({brand: "Lacoste", color: "brown"}));
    });

    it('should filter shoes by brand and size.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var filteredShoes = [{id : 16, color : 'white', brand : "Lacoste", size: 9, price : 440,  in_stock : 19},
                            {id : 19, color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
                            {id : 22, color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25}]

      assert.deepEqual(filteredShoes, shoeCatalogue.filterShoesByAny({brand: "Lacoste", size: 9}));
    });

    it('should filter shoes by color and size.', function() {
      var shoeCatalogue = ShoeCatalogue();

      var filteredShoes = [{id : 10, color : 'black', brand : "Kurt Geiger", size: 9, price : 415,  in_stock : 4},
                            {id : 19, color : 'black', brand : "Lacoste", size: 9, price : 410,  in_stock : 20},
                            {id : 23, color : 'black', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31}]

      assert.deepEqual(filteredShoes, shoeCatalogue.filterShoesByAny({color: "black", size: 9}));
    });

    it('should return entire shoes list if the filter params are not passed.', function() {
      var shoeCatalogue = ShoeCatalogue();

      assert.deepEqual(shoes, shoeCatalogue.filterShoesByAny({}));
    });

});
