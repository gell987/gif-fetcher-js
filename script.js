// function getUserInput() {
//   var userInputValue = document.querySelector(".userinput");
//   return userInputValue;
// }

// document.querySelector(".searchBtn").addEventListener("click", function () {
//   const userInput = getUserInput();
//   searchGif(userInput);
// });

// function searchGif(search) {
//   var url =
//     "https://api.giphy.com/v1/gifs/search?api_key=qv8zwMtq3L93FBpM4ET65OPa2lmcWZa4&q=" +search;

//   let apiCaller = new XMLHttpRequest();
//   apiCaller.open("GET", url);
//   apiCaller.send();

//   apiCaller.addEventListener("load", function (data) {
//     var actualData = data.target.response;
//     pushToDOM(actualData);
//   });
// }
// function pushToDOM(response) {
//   response = JSON.parse(response);

//   var images = response.data;

//   var container = document.querySelector(".gif-results");

//   container.innerHTML = "";

//   images.forEach(function (image) {
//     var src = image.images.fixed_height.url;

//     container.innerHTML += "<img src='" + src + "' class='gif gif__image' />";
//   });
// }
function getUserInput() {
    var inputValue = document
        .querySelector(".userinput").value;
    return inputValue;
  }
  
  document.querySelector(".searchBtn").addEventListener("click", function () {
    var userInput = getUserInput();
    searchGiphy(userInput);
  });
  
  
  function searchGiphy(searchQuery) {
    var url =
        "https://api.giphy.com/v1/gifs/search?api_key=qv8zwMtq3L93FBpM4ET65OPa2lmcWZa4&q=" + searchQuery;
  
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
  
    GiphyAJAXCall.addEventListener("load", function (data) {
        var actualData = data.target.response;
        pushToDOM(actualData);
        console.log(actualData);
  
    });
  }
  
  
  function pushToDOM(response) {
    response = JSON.parse(response);
  
    var images = response.data;
  
    var container = document.querySelector(".gif-results");
  
    container.innerHTML = "";
  
    images.forEach(function (image) {
  
        var src = image.images.fixed_height.url;
  
        container.innerHTML += "<img src='"
            + src + "' class='gif gif__image' />";
    });
  }