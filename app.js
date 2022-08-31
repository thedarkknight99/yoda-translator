var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputtext = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function constructUrl(input) {
    return serverUrl + "?text=" + input;
}
function errorHandler(error) {
    console.log("error occurred", error);
}
function clickHandler() {
    var input = inputText.value;

    var url = constructUrl(input);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let outputText = json.contents.translated;
            outputtext.innerText = outputText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)