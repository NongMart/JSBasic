document.getElementById("plus").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "Result : " + result;
})
document.getElementById("minus").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "Result : " + result;
})
document.getElementById("multiply").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "Result : " + result;
})
document.getElementById("divide").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "Result : " + result;
})

function myalert() {
    alert("Hello");
}

function plusFunc() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) + parseInt(num2);
    alert("Result : " + result)
}
function minusFunc() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) - parseInt(num2);
    alert("Result : " + result)
}
function multiplyFunc() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) * parseInt(num2);
    alert("Result : " + result)
}
function divideFunc() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) / parseInt(num2);
    alert("Result : " + result)
}


function calBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / ((height / 100) * (height / 100));
    document.getElementById("bmi").innerHTML = bmi;
    alert("BMI : " + bmi)
}


const img = document.createElement("img");
img.src = "img/pro.jpg"
img.style.width = "200px"
img.style.display = "block";
img.style.marginLeft = "auto";
img.style.marginRight = "auto";

document.getElementById("myPic").appendChild(img); //นำ Element เรียกใช้งานโดยใช้คำสั่ง append
