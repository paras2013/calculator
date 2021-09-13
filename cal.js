//vandana
var num1;
var num2;
var ope;

var res;

//insert() function to insert the number in textview.
function insert(num) {
    document.getElementById("calc").value = document.getElementById("calc").value + num;
    if(ope){
        num2=document.getElementById("calc").value + num;
    }
    else{
        num1=document.getElementById("calc").value + num;
    }  
}

//equal() function to return the result based on passed values.
function equal() {
    console.log("num1  :"+num1+"   num2  : " +num2+"   ope  :  "+ope);
    eql = document.getElementById("calc").value;
    if (eql) {
        document.getElementById("calc").value = eval(eql);
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
function operator(ope1) {
    ope=ope1;
    console.log(ope);
}


//backspace() function to insert the number in textview.
function backspace() {
    var expression = document.getElementById("calc").value;
    document.getElementById("calc").value = expression.substring(0, expression.length - 1);
}




