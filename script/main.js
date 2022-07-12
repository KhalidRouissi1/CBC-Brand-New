
let copyright = document.querySelector(".copyright");

function addYearOfCopyRight(){
    let date = new Date();
 
    copyright.innerHTML  = `${date.getFullYear()} CBC/Radio-Canada. All Rights reserved ` ;
}








