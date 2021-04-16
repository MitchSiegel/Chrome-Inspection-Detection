//global variable for the protected element to be cached in.
let htmlCache;
//if you want to change the HTML and don't want the alert to pop, just set this to true
// the function will set to false after the cache is updated.
let updatedPage = false;
let elementToSave = "#transactions";
window.onload = function() {
    // get the initial html structure of protected element 
    saveElement(elementToSave,false);
    //check the cache every x number of second
    let secondsPerCheck = 2
    setInterval(function(){ checkProtectedElement(elementToSave); }, secondsPerCheck * 1000);
};
function saveElement(protectedElement,refreshCache){
    let protectedElementHTML = document.querySelector(protectedElement);
    //Create new cache if requested or if htmlCache is empty.
    if(refreshCache || typeof htmlCache == "undefined"){
        htmlCache = protectedElementHTML.innerHTML;
    }
}
function checkProtectedElement(protectedElement){
    let protectedElementHTML = document.querySelector(protectedElement);
    if(protectedElementHTML.innerHTML != htmlCache && !updatedPage){
        //page has been changed 
        document.querySelector(".modal").classList.add("is-active")
        //I recommend updating the cache now to avoid constant notifications 
        saveElement(protectedElement,true);
    }
    if(updatedPage){
        //since updatedPage has been set to true, update the cache with the new changes.
        saveElement(protectedElement,true);
        updatedPage = false;
    }
}