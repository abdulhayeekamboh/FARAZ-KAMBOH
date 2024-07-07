var loading = document.querySelector(".loading");
var main = document.querySelector("main");




setTimeout(function(){
    main.style.display = "block";
    loading.style.display = "none";
},1500)


var icon = document.querySelectorAll(".mood i");
var main = document.querySelector("main");
var content2 = document.querySelector(".content1");
var content3 = document.querySelector(".content2");
var first = document.querySelector("#first");
var second = document.querySelector("#second");

first.addEventListener("click",function(){
    check = 0;
    first.style.display = "none";
    second.style.display = "block"
    content2.style.color = "white";
    content3.style.color = "white";
    document.body.style.backgroundColor = "black";
    main.style.color = "white";

})

second.addEventListener("click",function(){
    check = 0;
    first.style.display = "block";
    second.style.display = "none"
    content2.style.color = "black";
    content3.style.color = "black";
    document.body.style.backgroundColor = "white";
    main.style.color = "black";


})