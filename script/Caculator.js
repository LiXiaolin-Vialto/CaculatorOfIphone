/**
 * Created by lxl on 2016/10/7.
 */
function Caculator() {
    this.num1 = null;
    this.num2 = null;
    this.op = null;
    this.res = null;
}

Caculator.prototype.setNum1 = function(num){
    this.num1 = num;
};

Caculator.prototype.setNum2 = function (num) {
    this.num2 = num;
};

Caculator.prototype.setOp = function (op) {
    this.op = op;
};

Caculator.prototype.reset = function () {
    this.num1 = null;
    this.num2 = null;
    this.op = null;
    this.res = null;;
};

Caculator.prototype.getResult = function () {
    if(this.op == "+"){
        return this.add();
    }
    else if(this.op == "-"){
        return this.sub();
    }
    else if(this.op == "*"){
        return this.multi();
    }
    else if(this.op = "/"){
        return this.divide();
    }
};

Caculator.prototype.add = function () {
    this.res = this.num1 + this.num2;
    return this.res;
};
Caculator.prototype.sub = function () {
    this.res = this.num1 - this.num2;
    return this.res;
};
Caculator.prototype.multi = function () {
    this.res = this.num1 * this.num2;
    return this.res;
};
Caculator.prototype.divide = function () {
    this.res = this.num1/this.num2;
    return this.res;
};
Caculator.prototype.percenting = function () {
    this.res = this.num1/100;
};

