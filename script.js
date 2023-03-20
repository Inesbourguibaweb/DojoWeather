function removePop(){
    var element = document.querySelector("#popup");
    element.remove();
}
// function toCelsius(temp) {
//     return Math.round(temp * (9/5)+ 32);
// }
// function toFar(temp) {
//     return Math.round( (5/9) * (temp-32));
// }
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function Convert(element){
    // let element = document.getElementById("tempconverter");
    // console.log(element);
    // let value = element.value;
    // console.log(value);
    // let e = document.getElementsByClassName("high")
    // console.log(e);
    // let val=e.innerHTML;
    // if (value == 2){
    //     // setTimeout(toFar,1000);
    //     document.getElementById(el).innerText ++;
    // }   
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}
