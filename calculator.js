function ins(num) {
    document.getElementById("calc").value = document.getElementById("calc").value + num;
}
function equal() {
    var eql = document.getElementById("calc").value;
    if (eql) {
        document.getElementById("calc").value = eval(eql);
    }
}
function backspace() {
    var expression = document.getElementById("calc").value;
    document.getElementById("calc").value = expression.substring(0, expression.length - 1);

}