function onSubmitValidation(operation){
    let number1 = +document.getElementById("number1").value
    let number2 = +document.getElementById("number2").value
    
    if (number1 === 0){
        const num1 = document.querySelector(".num1")
        const existingError1 = num1.querySelector(".error-msg1");
        if (!existingError1) {
            const errorElement1 = document.createElement("span")
            errorElement1.innerText = "Number1 cannot be empty.";
            errorElement1.style.color = "red"
            errorElement1.classList.add("error-msg1");
            const breakElement1 = document.createElement("br")
            num1.prepend(breakElement1)
            num1.prepend(errorElement1)
        }
    }
    if (number2 === 0){
        const num2 = document.querySelector(".num2")
        const existingError2 = num1.querySelector(".error-msg2");
        if (!existingError2) {
            const errorElement2 = document.createElement("span")
            errorElement2.innerText = "Number2 cannot be empty.";
            errorElement2.style.color = "red"
            errorElement2.classList.add("error-msg2");
            const breakElement2 = document.createElement("br")
            num2.prepend(breakElement2)
            num2.prepend(errorElement2)
        }
    }
    else if (isNaN(number1)){
        const num1 = document.querySelector(".num1")
        const existingError1 = num1.querySelector(".error-msg1");
        if (!existingError1) {
            const errorElement1 = document.createElement("span")
            errorElement1.innerText = "Please Enter Number.";
            errorElement1.style.color = "red"
            errorElement1.classList.add("error-msg1");
            const breakElement1 = document.createElement("br")
            num1.prepend(breakElement1)
            num1.prepend(errorElement1)
        }
    }
    else if (isNaN(number2)){
        const num2 = document.querySelector(".num2")
        const existingError2 = num2.querySelector(".error-msg2");
        if (!existingError2) {
            const errorElement2 = document.createElement("span")
            errorElement2.innerText = "Please Enter Number.";
            errorElement2.style.color = "red"
            errorElement2.classList.add("error-msg2");
            const breakElement2 = document.createElement("br")
            num2.prepend(breakElement2)
            num2.prepend(errorElement2)
        }
    }
    else {
        const num1 = document.querySelector(".num1")
        const existingError1 = num1.querySelector(".error-msg1");
        const num2 = document.querySelector(".num2")
        const existingError2 = num2.querySelector(".error-msg2");
        if (existingError1) {
            existingError1.remove()
            const breakElement1 = num1.querySelector('br')
            breakElement1.remove()
        }
        if (existingError2) {
            existingError2.remove()
            const breakElement2 = num2.querySelector('br')
            breakElement2.remove()
        }
        const Out = calculator(operation,number1,number2)
        document.getElementById("output").value = Out
    }
}

function calculator(action, num1, num2){
    if (action === "add") {
        return num1+num2
    } 
    else if (action === "sub"){
        return num1-num2
    }
    else if (action === "mul"){
        return num1*num2
    }
    else {
        return "Something Went Wrong !!!"
    }
}