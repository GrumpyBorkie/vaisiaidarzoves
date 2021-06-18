
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



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
