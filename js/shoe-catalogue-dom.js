var brandFilterSelect = document.querySelector(".brandFilter");
var colorFilterSelect = document.querySelector(".colorFilter");
var sizeFilterSelect = document.querySelector(".sizeFilter");
var searchButton = document.querySelector(".searchButton");
var shoeResultsDisplayElement = document.querySelector(".shoeResultsDisplay");

var brandSelect = document.querySelector(".brand");
var colorSelect = document.querySelector(".color");
var sizeSelect = document.querySelector(".size");
var priceSelect = document.querySelector(".price");
var stockSelect = document.querySelector(".noOfStock");
var addButton = document.querySelector(".addButton");

var shoppingBasketDisplayElem = document.querySelector(".shoppingBasketDisplay");

var searchResultsTemplateSource = document.querySelector(".searchResultsTemplate").innerHTML;
var searchResultsTemplate = Handlebars.compile(searchResultsTemplateSource);

var shoppingBasketTemplateSource = document.querySelector(".shoppingBasketTemplate").innerHTML;
var shoppingBasketTemplate = Handlebars.compile(shoppingBasketTemplateSource);

var addToBasketButton = document.querySelector(".addToBasketButton");

searchButton.addEventListener('click', handleSearch);
addButton.addEventListener('click', handleAdd);
addToBasketButton.addEventListener('click', handleAddToBasket)

var shoeCatalogue = ShoeCatalogue();

function handleSearch(){
  var brand = brandFilterSelect.value;
  var color = colorFilterSelect.value;
  var size = sizeFilterSelect.value;


  if (brand !== "" && color !== "" && size !== "") {

     var filteredShoesObj = shoeCatalogue.filterShoes(brand, color, size);

      var filtShoes = filteredShoesObj.length ==1? filteredShoesObj[0] : {}

     showShoesResults(filtShoes, brand, color, size);
  }
}

function showShoesResults(filteredShoes, brand, color, size){

  if (filteredShoes.brand == brand) {
    filteredShoesData = searchResultsTemplate({
      numberInStock : filteredShoes.in_stock,
      brand : filteredShoes.brand,
      color : filteredShoes.color,
      size : filteredShoes.size
    })

   shoeResultsDisplayElement.innerHTML = filteredShoesData;

   shoeCatalogue.addSearchResults(filteredShoes);

 }else {
   filteredShoesData = searchResultsTemplate({
     numberInStock : 0,
     brand : brand,
     color : color,
     size : size
   })

  shoeResultsDisplayElement.innerHTML = filteredShoesData;

 }
}

function handleAdd() {

    var brand = brandSelect.value;
    var color = colorSelect.value;
    var size = sizeSelect.value;
    var price = priceSelect.value;
    var in_stock = stockSelect.value;

    if (brand !== "" && color !== "" && size !== "" && price !== "" && in_stock !== "") {

       shoeCatalogue.addShoe(brand, color, size, price, in_stock);

    }

}

function handleAddToBasket(){

  var shoe = shoeCatalogue.getSearchResults();

  if(shoe !== undefined && shoe!== "" && shoe!=={}){

    shoeCatalogue.addToShoppingBasket(shoe);
    var shoppingBasket = shoeCatalogue.getShoppingBasket();

    var shoes = shoeCatalogue.getShoes();
  /*  var updatedShoe = shoes.map((currentShoe, i) => {
      if(currentShoe.brand === shoe.brand && currentShoe.color === shoe.color && currentShoe.size === shoe.size){

        currentShoe.in_stock -= 1;

            console.log(currentShoe);

          return currentShoe;
      }
    })*/

    var updatedShoe = shoeCatalogue.getSearchResults();

    showShoesResults(updatedShoe, updatedShoe.brand, updatedShoe.color, updatedShoe.size);

    showShoppingBasket(shoppingBasket);
  }
}

function showShoppingBasket(shoppingBasket){

  var shoppingBasketData = { shoes: shoppingBasket, totalAmount: shoeCatalogue.getShoppingBasketTotatl()};

  shoppingBasketDisplayElem.innerHTML = shoppingBasketTemplate(shoppingBasketData);
}
