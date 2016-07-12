 //js部分;
function level() {//定义函数名;
    var score = document.getElementById("num").value;
    switch (true) {
        case score=="":
            alert("请重新输入分数！");
            break;      
        case score>100:
            alert("您输入的成绩不符，请重新输入！");
            break;
        case score<0:
            alert("您输入的成绩不符，请重新输入！");
            break;
        case score <= 100 && score > 90:
            alert("该生为一等生");
            break;
        case score <= 90 && score > 80:
            alert("该生为二等生");
            break;
        case score <= 80 && score > 70:
            alert("该生为三等生");
            break;
        case score <= 70 && score > 60:
            alert("该生为四等生");
            break;
        default:
            alert("该生不及格，重修");
    }
}//js部分结束;