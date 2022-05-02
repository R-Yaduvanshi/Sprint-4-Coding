// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar;


// document.querySelector("#search_input").addEventListener("input",searchNews)

// console.log(query)

// async function searchNews(){
//     let query = document.querySelector("#search_input").value;
//     let res = await fetch (`https://masai-mock-api.herokuapp.com/news?q=${query}`);
//     let data = await res.json();
//     // console.log("data:",data); // data is comming
//     append_data(data);

// }

// function append_data(data)
//  {   
//     //  document.querySelector("#results").innerHTML = null;
//     // console.log(data);

//     data.map(function({}){
           
//     })
// }
//   let data = async () => {
//       let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
//       let res = await fetch(url);
//       let data1 = await res.json();
//       appenddata(data1)
//   };

//   data();

//   function appenddata(data1){

//     data1.map(function({title,urlToImage,description,content}){

//          let divmain = document.querySelector("#results");
//          divmain.append(title);

//     })
//   }

const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

const container = document.querySelector("#results");

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    appendData(res);
    // console.log(res);
})
.catch(function (err) {
    console.log(err);
})

function appendData(data)
{
    // console.log(data);
    data.map(function(elem){
        // let img = elem.urlToImage;
        // container.append(img);

        console.log(elem);
    })
}