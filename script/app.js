/**
 * Created by lxl on 2016/9/25.
 */
window.onload = function () {
    // var number = document.getElementsByClassName("number");
    // var panel = document.getElementById("panel");
    // var str = "";
    // for(var i = 0;i<number.length;i++){
    //     number[i].onclick = function (element) {
    //         return function () {
    //
    //             str += element.textContent;
    //             refreshInput(panel,str);
    //         }
    //     }(number[i]);
    // }
    new HTMLCtrls(new Caculator());
};
function refreshInput(panel,str) {
    if(str.length<7){
        str = str;
    }else if(str.length<8){
        panel.style = "font-size:11rem;";
    }
    else if(str.length<9){
        panel.style = "font-size:9rem";
    }
    else{
        str = str.substr(0,9);
    }
    panel.value = str;
}

function Panel() {
   this.panel = document.getElementById("panel");
    this.str = "";
}

Panel.prototype.refreshPanelContent = function(str){
    if(str.length<7){
        this.str = str;
    }else if(str.length<8){
        this.panel.style = "font-size:11rem;";
    }
    else if(str.length<9){
        this.panel.style = "font-size:9rem";
    }
    else{
        this.str = str.substr(0,9);
    }
    this.panel.value = this.str;
};
Panel.prototype.input = function (ch) {
    if(ch.classList.value.indexOf("operate") != -1){

    }
};