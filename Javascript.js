let display = document.getElementById("display");
function appendValue(Value){
    if(display.innerText === "0"){
        display.innerText = Value;
    }else{
        display.innerText += Value;
    }

}
function clearDisplay(){
    display.innerText = "0";

}
function deleteLast(){
   if(display.innerText.length === 1){
    display.innerText = "0";
   }else{
    display.innerText = display.innerText.slice(0, -1)
   }
}
function clalculator(){
    try{
        let expression = display.innerText;
         expression = expression.replace(/(\d+(\.\d+)?)(\s*[\+\-])\s*(\d+(\.\d+)?)%/g, 
            (match, base, _, operator, percent) => {
                return `${base}${operator}(${base}*${percent}/100)`;
            }
        );
        // Replace all percentage values: e.g., 10% -> (10/100)
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
         let result = eval(expression);
        display.innerText = result.toFixed(2);
    } catch (e){
        display.innerText = "Error";
    }
}