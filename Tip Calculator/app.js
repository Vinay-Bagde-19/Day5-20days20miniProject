function calculateTip(){
    //Get the input values
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    //Calculate the tip and total amount
    const tipAmount = billAmount * (tipPercentage/100);
    const totalAmount = tipAmount+billAmount;

    // Display the Result
    // let tipOutput =document.getElementById("tip-amount").textContent = '$' + tipAmount.toFixed(2);
    // let totalOutput = document.getElementById("total-amount").textContent = '$' + totalAmount.toFixed(2);
    let tipOutput =document.getElementById("tip-amount");
    tipOutput.innerText = '$' + tipAmount.toFixed(2);
    let totalOutput =document.getElementById("total-amount");
    totalOutput.innerText = '$' + totalAmount.toFixed(2);
    return false;
}