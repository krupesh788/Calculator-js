function calculate(){


    let op = document.getElementById("op").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result;

    if(op == "+")
    {

        result = num1 + num2;
    }
    else if(op == "-") {
        
        result = num1 - num2;
        
    }
    
    else if(op == "*")
    {
        
        result = num1 * num2;
    }
    
    else if(op == "/")
    {
        
        result = num1 / num2;
    } 
    
    else
    {
        result = "Invalid operator";
        
    }
    
    console.log(result);
    document.getElementById("p1").innerHTML = `Result: ${result}`;
    
}