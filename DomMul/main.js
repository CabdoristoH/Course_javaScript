


// let Element = document.querySelector("h1");
// let ELement2 = document.querySelector(".Dom1");
// let ELement3 = document.querySelector("#Dom2");


// console.log(Element);
// console.log(ELement2);
// console.log(ELement3);

// let Element1 = document.querySelector("#Dom");
// let NewElement = document.createElement("h1");
// let addElement = document.createTextNode(" How are you man");

// Element.append(addElement);
// console.log(NewElement);


// //  daynamic style  css Javascript 

// let div =document.querySelector("div");
// let p = document.querySelector("p");
 

// p.style.fontSize="18px";
// p.style.color="#858585";
// div.style.margin="200px";
// div.style.border="1px solid #fc0606";
// div.classList.add("succes");
// // div.classList.remove("succes");
// // div.classList.add("error");
// //  div.classList.remove("error");

// console.log(p)



// let button= document.querySelector("button");
//  button.addEventListener("mouseover",()=>{
//     document.body.style.background="#434344"

//  })

// button.addEventListener("mouseleave",()=>{
//    document.body.style.background="#858585"
// })


let typing = document.querySelector("#typing");
let clone =document.querySelector("#clone");

typing.addEventListener("keyup",()=>{
   clone.innerHTML = typing.value;
})

