/*
const mainTitle = document.querySelector('#title');
const  btnDecrement =  document.querySelector('#decrement');
const  btnReset     =  document.querySelector('#reset');
const  btnIncrement =  document.querySelector('#increment');

let currValue= 0;

btnIncrement.addEventListener("click" , () =>{
currValue++;
mainTitle.textContent = currValue;
})
btnDecrement.addEventListener("click" , () =>{
    currValue--;
    mainTitle.textContent = currValue;
    })

    btnReset.addEventListener("click" , () =>{
        currValue = 0;
        mainTitle.textContent = currValue;
        })

 */


let mainTitle = document.querySelector("#title");
let btnIncrement = document.querySelector("#increment");
let btnDecrement =document.querySelector("#decrement");
let btnReset = document.querySelector("#reset");

let currValue = 0;


btnIncrement.addEventListener("click" , () =>{
    currValue++;

    mainTitle.textContent = currValue;
})


btnDecrement.addEventListener("click" , () => {
    currValue--;
    mainTitle.textContent = currValue;
})

btnReset.addEventListener("click", ( ) =>{
    currValue=0;
    mainTitle.textContent = currValue;

})



