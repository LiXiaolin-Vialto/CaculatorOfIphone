/**
 * Created by lxl on 2016/10/8.
 */
function HTMLCtrls(caculator) {
    this.caculator = caculator;
    this.numbers = document.getElementsByClassName("number");//1,2,3,4,5,6,7,8,9
    this.ac = document.getElementById("ac");
    this.negative = document.getElementById("negative");
    this.percentage = document.getElementById("percent");
    this.equal = document.getElementById("equal");
    this.add = document.getElementById("add");
    this.sub = document.getElementById("sub");
    this.multi = document.getElementById("multi");
    this.div = document.getElementById("div");

    this.panel = document.getElementById("panel");
    this.str = "0";
    this.isNegative = false;
    this.isFinished = true;
    this.hasPoint = false;

    this.bindEvent();
}
HTMLCtrls.prototype.bindEvent = function () {
    var _this = this;
    for(var i = 0;i<_this.numbers.length;i++){
        _this.numbers[i].onclick = function () {

            if(this.textContent == "." && !_this.hasPoint ) {
                _this.str += this.textContent;
                _this.isFinished = false;
                _this.hasPoint = true;
                _this.panel.value = _this.panel.value+".";
            }
            else if(this.textContent == "." && _this.hasPoint){
                console.error("has two points!");
            }
            else{
                _this.str += this.textContent;
                _this.isFinished = true;
            }

            if(_this.isFinished){
                _this.str = _this._refreshPanel(_this.str,_this.panel);
                _this.caculator.num2 = parseFloat(_this.str);
            }
        }
    }
    _this.ac.onclick = function () {
        _this.str = "0";
        _this.caculator.reset();

        _this._refreshPanel(_this.str,_this.panel);
    };

    _this.negative.onclick = function () {
        if(!_this.isNegative){
            _this.str = "-"+_this.str;
            _this.isNegative = true;
        }
        else {
            _this.str = _this.str.slice(1);
            _this.isNegative = false;
        }
        _this._refreshPanel(_this.str,_this.panel);
    };

    _this.percentage.onclick = function () {
        _this.caculator.num1 = parseFloat(_this.str);

        _this.caculator.percenting();

        _this.str =_this.caculator.res;
        _this.str = _this._refreshPanel(_this.str+"",_this.panel);

        _this.hasPoint = true;
    };

    _this.add.onclick = function () {
        _this.doMath("+");
    };

    _this.sub.onclick = function () {
        _this.doMath("-");
    };
    
    _this.multi.onclick = function () {
        _this.doMath("*");
    };
    _this.div.onclick = function () {
        _this.doMath("/");
    };

    _this.equal.onclick = function () {
        _this.str = _this.caculator.getResult();
        _this._refreshPanel(_this.str+"",_this.panel);
        _this.str = "";
    };

};

HTMLCtrls.prototype.doMath = function (op) {
    if(this.caculator.num1 && this.caculator.num2){
        this.caculator.getResult();
    }
    this.caculator.op = op;
    this.caculator.num1 = this.caculator.res || this.caculator.num2;
    this._refreshPanel(this.caculator.num1+"",this.panel);
    this.str = "";
};


HTMLCtrls.prototype._refreshPanel = function (str,panel) {
    if((str[0] == "0" && str[1] != ".") || (str[0] == "-"&&str[1]=="0"&&str[2]!=".")){
        str = parseFloat(str)+"";
    }

    if(str.length<7){
        panel.style = "font-size:13rem;";
    }else if(str.length<8){
        panel.style = "font-size:11rem;";
    }
    else if(str.length<9){
        panel.style = "font-size:10rem";
    }
    else if(str.length<10){
        panel.style = "font-size:9rem;";
    }
    else if(str[0] == "-" && str.length==10){
        panel.style = "font-size:8rem;";
    } else{
        str = str.substr(0,9);
    }

    panel.value = str;

    return str;
};