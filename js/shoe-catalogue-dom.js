var brandSelect = document.querySelector(".brandFilter");
var colorSelect = document.querySelector(".colorFilter");
var sizeSelect = document.querySelector(".sizeFilter");
var searchButton = document.querySelector(".searchButton");
var shoeResultsDisplayElement = document.querySelector(".shoeResultsDisplay");

var searchResultsTemplateSource = document.querySelector(".searchResultsTemplate").innerHTML;
var searchResultsTemplate = Handlebars.compile(searchResultsTemplateSource);

searchButton.addEventListener('click', handleSearch);

var shoeCatalogue = ShoeCatalogue();

function handleSearch(){
  var brand = brandSelect.value;
  var color = colorSelect.value;
  var size = sizeSelect.value;


  if (brand !== "" && color !== "" && size !== "") {
     var shoes = shoeCatalogue.getShoes();

     var filteredShoesObj = shoeCatalogue.filterShoes(shoes, brand, color, size);

     showShoesResults(filteredShoesObj, brand, color, size);
  }

  function showShoesResults(filteredShoes, brand, color, size){
    if (filteredShoesObj.length == 1) {
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
}
