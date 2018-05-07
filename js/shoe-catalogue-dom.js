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

var searchResultsTemplateSource = document.querySelector(".searchResultsTemplate").innerHTML;
var searchResultsTemplate = Handlebars.compile(searchResultsTemplateSource);

searchButton.addEventListener('click', handleSearch);
addButton.addEventListener('click', handleAdd);

var shoeCatalogue = ShoeCatalogue();

function handleSearch(){
  var brand = brandFilterSelect.value;
  var color = colorFilterSelect.value;
  var size = sizeFilterSelect.value;


  if (brand !== "" && color !== "" && size !== "") {

     var filteredShoesObj = shoeCatalogue.filterShoes(brand, color, size);

     showShoesResults(filteredShoesObj, brand, color, size);
  }
}

function showShoesResults(filteredShoes, brand, color, size){
  if (filteredShoes.length == 1) {
    filteredShoesData = searchResultsTemplate({
      numberInStock : filteredShoes[0].in_stock,
      brand : brand,
      color : color,
      size : size
    })

   shoeResultsDisplayElement.innerHTML = filteredShoesData;

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
