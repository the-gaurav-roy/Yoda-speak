var txtInput = document.querySelector("#txtinput")
var btnTranslate = document.querySelector("#btn-translate")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error)
{
    console.log("error occured"+ error)
    alert("something wrong with server")
}


function clickHandler()
{
    
    fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => outputDiv.innerText=json.contents.translated)
    .catch(errorHandler)

};


btnTranslate.addEventListener("click",clickHandler);


