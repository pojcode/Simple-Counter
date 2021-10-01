"use strict";
/*
Script for the app simle counter
*/
function updateDisplay(value) {
    if (value === "RESET") {
        return (display.innerText = "0");
    }
    var newValue = (parseInt(display.innerText) +
        parseInt(value) * signOperator).toString();
    return (display.innerText = newValue);
}
function setOperator() {
    if (addSubstract.value === "+") {
        signOperator = operator.add;
        // color = '' will take the color from css file
        addSubstract.onmouseover = function () {
            addSubstract.style.color = "";
        };
        addSubstract.onmouseout = function () {
            addSubstract.style.color = "";
        };
    }
    else if (addSubstract.value === "-") {
        signOperator = operator.substract;
        addSubstract.onmouseover = function () {
            addSubstract.style.color = "";
        };
        addSubstract.onmouseout = function () {
            addSubstract.style.color = "rgb(177, 39, 39)";
        };
    }
}
function displayColor(buttonID) {
    if (buttonID === "reset") {
        display.style.boxShadow = "0rem 0 1rem rgb(154, 154, 21)";
    }
    else {
        if (signOperator === operator.add) {
            display.style.boxShadow = "0.2rem 0.4rem 0.3rem rgb(3, 113, 56)";
        }
        else if (signOperator === operator.substract) {
            display.style.boxShadow = "0.2rem 0.4rem 0.3rem rgb(177, 39, 39)";
        }
    }
    setTimeout(function () {
        display.style.boxShadow = "";
    }, 1000);
}
function numberBtnColor() {
    var _loop_1 = function (i) {
        if (allBtn[i].id !== "reset" && signOperator === operator.substract) {
            // backgroundcolor = '' -> will use the .css file config
            allBtn[i].onmouseover = function () {
                {
                    allBtn[i].style.backgroundColor = "rgb(177, 39, 39)";
                }
            };
            allBtn[i].onmouseout = function () {
                {
                    allBtn[i].style.backgroundColor = "";
                }
            };
        }
        else {
            allBtn[i].onmouseover = function () {
                {
                    allBtn[i].style.backgroundColor = "";
                }
            };
            allBtn[i].onmouseout = function () {
                {
                    allBtn[i].style.backgroundColor = "";
                }
            };
        }
    };
    for (var i = 0; i < allBtn.length; i++) {
        _loop_1(i);
    }
}
function setValueHistory(value) {
    if (value !== "RESET") {
        if (signOperator === operator.add && showHistory.length === 0) {
            showHistory += " " + value;
        }
        else if (signOperator === operator.add) {
            showHistory += " <span style=\"color: green;\">+</span> " + value;
        }
        else {
            showHistory += " <span style=\"color: red;\">-</span> " + value;
        }
    }
    else {
        showHistory = "";
    }
    inputHistory.innerHTML = showHistory;
}
function initEventListeners() {
    var _loop_2 = function (i) {
        allBtn[i].addEventListener("click", function () {
            updateDisplay(allBtn[i].innerText);
        });
        allBtn[i].addEventListener("click", function () {
            setValueHistory(allBtn[i].innerText);
        });
        allBtn[i].addEventListener("click", function () { return displayColor(allBtn[i].id); });
    };
    for (var i = 0; i < allBtn.length; i++) {
        _loop_2(i);
    }
    addSubstract.addEventListener("change", function () {
        setOperator();
        numberBtnColor();
    });
}
var operator;
(function (operator) {
    operator[operator["add"] = 1] = "add";
    operator[operator["substract"] = -1] = "substract";
})(operator || (operator = {}));
var signOperator = operator.add;
var showHistory = "";
var allBtn = document.getElementsByTagName("button");
var display = document.getElementById("display");
var addSubstract = document.getElementById("operator");
var inputHistory = document.getElementById("history");
window.addEventListener("load", initEventListeners);
