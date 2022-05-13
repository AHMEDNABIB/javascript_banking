


document.getElementById('deposit-button').addEventListener('click', function () {

    let deposittotal = 0;
    const depositInput = document.getElementById('deposit-input');

    const newdepositAmountText = depositInput.value;
    const newdepositAmount =parseFloat(newdepositAmountText)
   //console.log(newdepositAmount)
   
    
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;

   

    const previousDepositAmount = parseFloat(previousDepositText);
    //  console.log(previousDepositAmount);

    const newDepositTotal = newdepositAmount + previousDepositAmount
    
    // console.log(newDepositTotal)


    depositTotal.innerText = newDepositTotal
 
    

  

    depositInput.value =''


})