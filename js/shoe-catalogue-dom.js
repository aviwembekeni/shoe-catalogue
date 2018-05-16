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

var clearShoppingBasketButton = document.querySelector('.clearBtn');

var successMessageDivElem = document.querySelector(".successMessageDiv");
var errorMessageDivElem = document.querySelector(".errorMessageDiv");

searchButton.addEventListener('click', handleSearch);
addButton.addEventListener('click', handleAdd);
clearShoppingBasketButton.addEventListener('click', handleClearBasket);

var shoeCatalogue = ShoeCatalogue();

function handleSearch(){
  var brand = brandFilterSelect.value;
  var color = colorFilterSelect.value;
  var size = sizeFilterSelect.value;

  var searchParams = {}

  if (brand !== "") {
     searchParams.brand = brand;
  }

  if (color !== "") {
     searchParams.color = color;
  }

  if(size !== "") {
    searchParams.size = Number(size);
  }

  var filteredShoes = shoeCatalogue.filterShoesByAny(searchParams);

  shoeCatalogue.addSearchResults(filteredShoes);

  showShoesResults(filteredShoes, brand, color, size);
}

function showShoesResults(filteredShoes, brand, color, size){

  if (filteredShoes.length !== 0 ) {
    filteredShoesData = searchResultsTemplate({
      shoes : filteredShoes
    })

   shoeResultsDisplayElement.innerHTML = filteredShoesData;

 }else {
   if (brand!== undefined) {

     filteredShoesData = searchResultsTemplate({
       shoes : [{in_stock : 0,
       brand : brand,
       color : color,
       size : size}]
     })

    shoeResultsDisplayElement.innerHTML = filteredShoesData;
   }

 }
}

function handleAdd() {

    var brand = brandSelect.value;
    var color = colorSelect.value;
    var size = sizeSelect.value;
    var price = priceSelect.value;
    var in_stock = stockSelect.value;
    var shoes = shoeCatalogue.getShoes();

    if (brand !== "" && color !== "" && size !== "" && price !== "" && in_stock !== "") {

       shoeCatalogue.addShoe(brand, color, size, price, in_stock);

       var updatedShoes = shoeCatalogue.getShoes();

       if(shoes !== updatedShoes){
         successMessageDivElem.style.display = "inline-block";
       }else{
         errorMessageDivElem.style.display = "inline-block";
       }

    }

    brandSelect.value = "";
    colorSelect.value = "";
    sizeSelect.value = "";
    priceSelect.value = "";
    stockSelect.value = "";

}

function addToBasket(id) {
   shoeCatalogue.addToShoppingBasket(id);
   var shoppingBasket = shoeCatalogue.getShoppingBasket();

   var updatedShoes = shoeCatalogue.getSearchResults();

   showShoesResults(updatedShoes, updatedShoes.brand, updatedShoes.color, updatedShoes.size);

   showShoppingBasket(shoppingBasket);
}

function handleClearBasket(){
  shoeCatalogue.clearShoppingBasket();

  var updatedShoes = shoeCatalogue.getSearchResults();

  showShoesResults(updatedShoes, updatedShoes.brand, updatedShoes.color, updatedShoes.size);

  showShoppingBasket(shoeCatalogue.getShoppingBasket);
}

function showShoppingBasket(shoppingBasket){

  var shoppingBasketData = { shoes: shoppingBasket, totalAmount: shoeCatalogue.getShoppingBasketTotatl()};

  shoppingBasketDisplayElem.innerHTML = shoppingBasketTemplate(shoppingBasketData);
}
