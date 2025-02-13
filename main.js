// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";

/*
const car = "BMW";
if(car === "BM"){
// alert("I love BMW car")
console.log("I love BMW car");

}else{
    console.log("I love ");
}*/

const myImg = document.querySelector("img");
myImg.addEventListener("click", ()=>{
    const mySrc = myImg.getAttribute("src","images/firefox-icon.png")
    if(mySrc==="images/firefox-icon.png"){
        myImg.setAttribute("src","images/image2.png")
    }else{
        myImg.setAttribute("src","images/firefox-icon.png")
    }
})

const myBtn = document.querySelector("button")
const myHeading= document.querySelector("h1")

function setName (){
    const myName = prompt("Enter a name")
    localStorage.setItem("name", myName)
    myHeading.textContent = `Mozilla is really cool ${myName}`
}

if(!localStorage.getItem("name")){
    setName()
}else{
    const storedName = localStorage.getItem("myName")
    myHeading.textContent = `Mozilla is really cool ${storedName}`
}
myBtn.addEventListener("click",()=>{
    setName()
})