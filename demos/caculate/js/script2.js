//js部分开始
window.load=function(){
    document.getElementById('inputText').focus();
};
var Number1 = "";//定义全局变量
var Number2 = "";
var NewNumber = "";
var oper = "";

function Num(number) {//输出计算结果
    document.getElementById('inputText').value = number;

};
var clear = document.getElementById('inputBack');//清零
clear.onclick = function() {
    Number1 = "";
    Number2 = "";
    NewNumber = "";
    oper="";
    document.getElementById('inputText').value = ""
};
function CheckNumber(answer) {//获取按钮输入的值
    if (answer == ".") {
        Number = document.getElementById('inputText').value;
        if (Number.indexOf(".") != -1) {
            answer = "";
        };
    };
    if (NewNumber == "yes") {
        Number2 += answer;
        Num(Number2);
    } else {
        if (NewNumber=false) {
            Number1 = answer;
            Number2 = "";
            NewNumber = "no";
        } else {
            Number1 += answer;
        };

        Num(Number1);
    };
};
function AddButton(x) { //加法
    if (x == 1) {
        EqualButton();
    };
    if (Number2 != "") {
        Number1 = parseFloat((parseFloat(Number1) + parseFloat(Number2)).toFixed(3));
    };
    NewNumber = "yes";
    oper = '+';
    Num(Number1);
};

function SubButton(x) { //减法
    if (x == 1) {
        EqualButton();
    };
    if (Number2 != "") {
        Number1 = parseFloat((Number1 - Number2).toFixed(8));
    };
    NewNumber = "yes";
    oper = '-';
    Num(Number1);
};

function MultButton(x) { //乘法
    if (x == 1) {
        EqualButton();
    };
    if (Number2 != "") {
        Number1 = parseFloat((Number1 * Number2).toFixed(8));
    };
    NewNumber = "yes";
    oper = '*';
    Num(Number1);
};

function DivButton(x) { //除法
    if (x == 1) {
        EqualButton();
    };
    if (Number2 != "") {
        Number1 = parseFloat((Number1 / Number2).toFixed(8));
        if (Number2 == 0) {
            alert("除数不能为零");
        };
    };
    NewNumber = "yes";
    oper = '/';
    Num(Number1);
};

function RecipButton() { //倒数
    Number1 = parseFloat((1 / Number1).toFixed(8));
    NewNumber = "";
    Num(Number1);
};

function SinButton() { //三角函数sin
    Number1 = parseFloat(Math.sin(Number1*Math.PI/180).toFixed(8));
    NewNumber = "";
    Num(Number1);
};

function CosButton() { //三角函数cos
    Number1 = parseFloat(Math.cos(Number1*Math.PI/180).toFixed(8));
    NewNumber = "";
    Num(Number1);
};

function AbsButton() { //绝对值
    Number1 = Math.abs(Number1);
    NewNumber = "";
    Num(Number1);
};

function NagButton() { //正负数切换
    Number1 = parseFloat(-Number1);
    NewNumber = "";
    Num(Number1);
};

function SqrtButton() { //平方根
    if (Number1<0) {
        alert("输错了！请从新输入");
        Number1 = Math.sqrt(Number1);
    }else{
        Number1 = Math.sqrt(Number1);
    };
    
    NewNumber = "";
    Num(Number1);
};

function EqualButton() {//等号事件
    if (oper == '+') AddButton(0);
    if (oper == '-') SubButton(0);
    if (oper == '*') MultButton(0);
    if (oper == '/') DivButton(0);
    Number2 = "";
    oper = "";
};
