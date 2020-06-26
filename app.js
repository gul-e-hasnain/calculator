function insert(num){
    var textview = document.getElementById("textview");
    textview.value += num;
}

function equal(){
    var textview = document.getElementById("textview");
    textview.value = eval(textview.value);

}

function clean(){
    var textview = document.getElementById("textview");
    textview.value = "";
}

