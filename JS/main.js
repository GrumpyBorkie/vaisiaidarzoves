var btnSearch = document.getElementById("btnSearch");
var productsAll = document.getElementsByClassName("searchItem");
var productsCardAll = document.getElementsByClassName("w3-third");

btnSearch.addEventListener("click", function () {
    //clear search criteria field
    for (var i = 0; i < productsCardAll.length; i++) {
        productsCardAll[i].setAttribute("class", " w3-third");
    }

    var inputFieldSearch = document.getElementById("searchField").value.toLowerCase();

    for (var i = 0; i < productsAll.length; i++) {
        if (productsAll[i].innerHTML.toLowerCase().includes(inputFieldSearch)) { //do nothing
        } else {
            productsCardAll[i].setAttribute("class", " w3-third + d-none");
        }
    }
});