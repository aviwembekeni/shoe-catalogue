function ShoeCatalogue(){
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
        { color : 'brown', brand : "lacoste", size: 7, price : 400,  in_stock : 21},
        { color : 'brown', brand : "Lacoste", size: 8, price : 400,  in_stock : 22},
        { color : 'brown', brand : "Lacoste", size: 9, price : 410,  in_stock : 25},
        { color : 'white', brand : "Tommy Helfiger", size: 9, price : 440,  in_stock : 31},

      ];

      function checkShoes(){
        var shoesCopy = [];

        for (var i = 0; i < shoes.length; i++) {
          shoesCopy.push(Object.create(shoes[i]))
        }

        return shoesCopy;
      }

      function filterShoesList(shoesArr, brand, color, size){
        var newArray = shoesArr.filter(function (shoe) {
          return shoe.brand == brand &&
                 shoe.color == color &&
                 shoe.size == size;
        });

        return newArray
      }

  return {
    getShoes : checkShoes,
    filterShoes : filterShoesList
  }
}
