var res;
function ins(num) {
    document.getElementById("calc").value = document.getElementById("calc").value + num;
}
function equal() {
    eql = document.getElementById("calc").value;
    if (eql) {
       const ope=eql.split(" ")
        console.log("num1  :"+ope[0]+"   num2  : " +ope[2]+"   ope  :  "+ope[1]);
        if(ope[1]=="+"){
              res=parseFloat(ope[0])+parseFloat(ope[2]);
        }
        else if(ope[1]=="-"){
            res=parseFloat(ope[0])-parseFloat(ope[2]);
        }
        else if(ope[1]=="*"){
            res=parseFloat(ope[0])*parseFloat(ope[2]);
        }
        else if(ope[1]=="/"){
            res=parseFloat(ope[0])/parseFloat(ope[2]);
        }
        else{
            res=0;
        }
        document.getElementById("calc").value = res;
    }
}
function backspace() {
    var expression = document.getElementById("calc").value;
    document.getElementById("calc").value = expression.substring(0, expression.length - 1);

}