var num1;
var num2;
var ope;

function ins(num) {
    document.getElementById("calc").value = document.getElementById("calc").value + num;
    if(ope){
        num2=document.getElementById("calc").value + num;
    }
    else{
        num1=document.getElementById("calc").value + num;
    }  
}
function equal() {
    console.log("num1  :"+num1+"   num2  : " +num2+"   ope  :  "+ope);
    eql = document.getElementById("calc").value;
    if (eql) {
        document.getElementById("calc").value = eval(eql);
    }
}
function operator(ope1) {
    ope=ope1;
    console.log(ope);
}
function backspace() {
    var expression = document.getElementById("calc").value;
    document.getElementById("calc").value = expression.substring(0, expression.length - 1);

}