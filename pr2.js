
let number= document.getElementById("number")
let counter=0;
setInterval(()=>{
    if(counter==100){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML=counter + "%";
    }

},17);


var text = ["basic", "professional", "bussiness"];
var a1 = 0;
var elem = document.getElementById("changetext");
var inst = setInterval(change, 500);

function change() {
  elem.innerHTML = text[a1];
  a1++;
  if (a1>= text.length) {
    a1 = 2;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}