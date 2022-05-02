// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar , sidebar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML  = navbar();
document.getElementById("sidebar").innerHTML = sidebar();


import { searchNews , append } from "../components/fetch.js";


import {searchcode, append1} from "../components/sidebarfetch.js"

// searchcode("in").then((data) => {
//     console.log(data)
// });

let search = (el) => {
    if(el.key == "Enter"){
      
        let value = document.getElementById("search_input").value
        searchNews(value).then((data) => {
        //  console.log(data)
         let container = document.getElementById("results")
         container.innerHTML = null
         append(data.articles,container)

        //  window.location.href = "../news.html"
         });
    }
}


document.getElementById("search_input").addEventListener("keydown",search)


/// side bar ???????????????????????????????????????????????????????????????

let categories = document.getElementById("sidebar").children

for(let el of categories){
    el.addEventListener("click",csearch)
}

function csearch() {
    searchcode(this.id).then((data) => {
    console.log(data)
    let container = document.getElementById("results")
    container.innerHTML = null
    append(data.articles,container)
    });
}