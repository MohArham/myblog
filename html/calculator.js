let displayEl = document.querySelector("#num-display");
let calcEl = document.querySelector(".calc");
            let displayBox = document.querySelector(".display");
            displayEl.style.fontSize = "64px";
            let justCalculated = false
            let opAfterCalc = false
            let numBtns = document.querySelectorAll(".num-btn");
            let oprBtns = document.querySelectorAll(".opr-btn");
            let moreOprBtns = document.querySelectorAll(".more-opr-btn");
            let blackBtns = document.querySelectorAll(".black-btns");
            let bodyEl = document.querySelector("body");
            let isDark = false

            function getOperator(equation) {
                if (equation.includes("+")) {
                    return "+"
                } else if (equation.includes("-")) {
                    return "-"
                } else if (equation.includes("x")) {
                    return "x"
                } else if (equation.includes("÷")) {
                    return "÷"
                }
            }

            function displayDigit(value) {
                if (justCalculated) {
                    eraseDigits()
                    justCalculated = false
                }
                displayEl.innerText += value;
                resizeDigits()
            }

            function eraseDigits() {
                displayEl.textContent = "";
                displayEl.style.fontSize = "64px";
            }

            function backSpace() {
                if (justCalculated) {
                    eraseDigits();
                    justCalculated = false;
                    return;
                } 
                displayEl.innerText = displayEl.innerText.slice(0, -1);

                resizeDigits()
            }
            
            function multiplyDigits() { displayEl.innerText += "x";}
            function minusDigits() {displayEl.innerText += "-";}
            function addDigits() {displayEl.innerText += "+";}
            function divideDigits() {displayEl.innerText += "÷"}

            function solveEquation() {

            let equation = displayEl.textContent;
            justCalculated = false
            let operator = getOperator(equation);
            let equationParts = equation.split(operator);
            let firstNum = equationParts[0];
            let secondNum = equationParts[1];
            let result;

                if (operator === "+") {
                    result = Number(firstNum) + Number(secondNum);
                    displayEl.innerText = result
                } else if (operator === "-") {
                    result = Number(firstNum) - Number(secondNum);
                    displayEl.innerText = result
                } else if (operator === "x") {
                    result = Number(firstNum) * Number(secondNum);
                    displayEl.innerText = result
                } else if (operator === "÷") {
                    result = Number(firstNum) / Number(secondNum);
                    displayEl.innerText = result
                } 

                 justCalculated = true
                 resizeDigits()

            }

            function resizeDigits() {
                let currentSize = Number(displayEl.style.fontSize.replace("px", ""));

                if (displayEl.scrollWidth > displayBox.clientWidth) {
                    displayEl.style.fontSize = (currentSize - 5) + "px";
                }

                if (displayEl.scrollWidth < displayBox.clientWidth - 50 && currentSize < 64) {
                    displayEl.style.fontSize = (currentSize + 5) + "px";
                }
            }

            function changeBackground() {
                let theme = Math.floor(Math.random() * 5);

                if (theme === 0) {
                    calcEl.style.boxShadow = "-5px 10px 70px blue";
                    calcEl.style.backgroundColor = "blue";
                    displayBox.style.backgroundColor = "rgb(3, 105, 255)";
                    displayEl.style.color = "darkblue"
                } else if (theme === 1) {
                    calcEl.style.boxShadow = "-5px 10px 70px green";
                    calcEl.style.backgroundColor = "green";
                    displayBox.style.backgroundColor = "lightgreen";
                    displayEl.style.color = "darkgreen"
                } else if (theme === 2) {
                    calcEl.style.boxShadow = "-5px 10px 70px red";
                    calcEl.style.backgroundColor = "red";
                    displayBox.style.backgroundColor = "rgb(252, 102, 85)";
                    displayEl.style.color = "maroon"
                } else if (theme === 3) {
                    calcEl.style.boxShadow = "-5px 10px 70px orange"; 
                    calcEl.style.backgroundColor = "orange";
                    displayBox.style.backgroundColor = "peachpuff";
                    displayEl.style.color = "darkorange"
                } else if (theme === 4) {
                    calcEl.style.boxShadow = "-5px 10px 70px purple"; 
                    calcEl.style.backgroundColor = "purple";
                    displayBox.style.backgroundColor = "#d8b4fe";
                    displayEl.style.color = "#4c1d95"
                }

                for (let i = 0; i < numBtns.length; i += 1) {
                    let singleNumBtn = numBtns[i];

                    singleNumBtn.style.fontWeight = "bold";
                    singleNumBtn.style.color = "white";

                    if (theme === 0) {
                        singleNumBtn.style.backgroundColor = "rgb(3, 105, 255)"
                    } else if (theme === 1) {
                        singleNumBtn.style.backgroundColor = "lightgreen";
                    } else if (theme === 2) {
                        singleNumBtn.style.backgroundColor = "rgb(252, 102, 85)";
                    } else if (theme === 3) {
                        singleNumBtn.style.backgroundColor = "gold";
                    } else if (theme === 4) {
                        singleNumBtn.style.backgroundColor = "plum";
                    }
                }

                for (let j = 0; j < oprBtns.length; j++) {
                    let singleOprBtn = oprBtns[j];

                    singleOprBtn.style.fontWeight = "bold"; 
                    singleOprBtn.style.color = "white"; 

                    if (theme === 0) {
                        singleOprBtn.style.backgroundColor = "darkblue";
                    } else if (theme === 1) {
                        singleOprBtn.style.backgroundColor = "darkgreen";
                    } else if (theme === 2) {
                        singleOprBtn.style.backgroundColor = "maroon";
                    } else if (theme === 3) {
                        singleOprBtn.style.backgroundColor = "darkorange";
                    } else if (theme === 4) {
                        singleOprBtn.style.backgroundColor = "#d85cfa";
                    }
                }
                

                for (let l = 0; l < moreOprBtns.length; l++) { 
                    let singleMoreOprBtn = moreOprBtns[l];

                    singleMoreOprBtn.style.fontWeight = "bold";
                    singleMoreOprBtn.style.color = "white";

                    if (theme === 0) {
                        singleMoreOprBtn.style.backgroundColor = "rgb(103, 69, 255)";
                    } else if (theme === 1) {
                        singleMoreOprBtn.style.backgroundColor = "#9bff80";
                    } else if (theme === 2) {
                        singleMoreOprBtn.style.backgroundColor = "rgb(247, 135, 122)";
                    } else if (theme === 3) {
                        singleMoreOprBtn.style.backgroundColor = "darkgoldenrod";
                    } else if (theme === 4) {
                        singleMoreOprBtn.style.backgroundColor = "#fa73ff"
                    }
                }
            } // end of background changer function

            //object for dark theme
            const darkTheme = {
                calcBg: "black",
                displayBg: "#333232",
                displayColor: "white",
                numBtnBg: "#333",
                numBtnColor: "white",
                oprBtnBg: "rgb(163, 60, 7)",
                moreBtnBg: "#3a3a3a",
                bodyBg: "grey",
                moreBtnColor: "white",
                blackBtnBg: "grey",
                boxShadow: "-5px 10px 70px black"
            };

            const lightTheme = {
                calcBg: "#fbf8f8",
                displayBg: "#d3d2d2",
                displayColor: "black",
                numBtnBg: "#f1eded",
                oprBtnBg: "#ff8a3d",
                numBtnColor: "black", 
                moreBtnBg: "rgb(221, 218, 218)",
                bodyBg: "white",
                moreBtnColor: "black",
                blackBtnBg: "black",
                boxShadow: "-5px 10px 70px rgb(164, 159, 159)"
            };

            function applyTheme(theme) {
                calcEl.style.backgroundColor = theme.calcBg;
                displayBox.style.backgroundColor = theme.displayBg
                displayEl.style.color = theme.displayColor;
                bodyEl.style.backgroundColor = theme.bodyBg
                calcEl.style.boxShadow = theme.boxShadow

                for (let i = 0; i < numBtns.length; i++) {
                    numBtns[i].style.backgroundColor = theme.numBtnBg;
                    numBtns[i].style.color = theme.numBtnColor;
                }

                for (let i = 0; i < oprBtns.length; i++) {
                    oprBtns[i].style.backgroundColor = theme.oprBtnBg;
                }

                for (let i = 0; i < moreOprBtns.length; i++) {
                    moreOprBtns[i].style.backgroundColor = theme.moreBtnBg;
                    moreOprBtns[i].style.color = theme.moreBtnColor;
                }
                for (let i = 0; i < blackBtns.length; i++) {
                    blackBtns[i].style.backgroundColor = theme.blackBtnBg;  
                    blackBtns[i].style.color = "white";
                }
            }

            function darkMode() {
                let darkBtn = document.querySelector(".darkmode-btn");

                 if (isDark === false) {
                    applyTheme(darkTheme);
                    darkBtn.textContent = "Light Mode";
                    darkBtn.style.color = "black";
                    darkBtn.style.background = "linear-gradient(to bottom right, white 60%, grey, black)";
                    isDark = true;
                } else {
                    applyTheme(lightTheme);
                    darkBtn.textContent = "Dark Mode";
                    darkBtn.style.color = "white";
                    darkBtn.style.background = "linear-gradient(to bottom right, black 60%, grey, whitesmoke)";
                    isDark = false;
                }
            }