document
	.getElementById("deposit-button")
	.addEventListener("click", function () {
		let deposittotal = 0;
		const depositInput = document.getElementById("deposit-input");

		// deposit amount
		const newdepositAmountText = depositInput.value;
		const newdepositAmount = parseFloat(newdepositAmountText);

		const depositTotal = document.getElementById("deposit-total");

		const previousDepositText = depositTotal.innerText;

		const previousDepositAmount = parseFloat(previousDepositText);
		//  console.log(previousDepositAmount);

		const newDepositTotal = newdepositAmount + previousDepositAmount;
        depositTotal.innerText = newDepositTotal;
        
        // Total balance
        const balanceTotal = document.getElementById('balance-total');

        const previousBalanceTotalText = balanceTotal.innerText
        
        const previousBalanceTotal = parseFloat(previousBalanceTotalText)

        const newBalanceTotal = previousBalanceTotal + newdepositAmount
        
        balanceTotal.innerText = newBalanceTotal;


		depositInput.value = "";
    });
    

document.getElementById("withdraw-button").addEventListener('click', function () {
        
    const withdrawInput = document.getElementById("withdraw-input");
    
    const withdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(withdrawAmountText)

    // console.log(typeof newwithdrawAmount);

    const withdrawTotal = document.getElementById("withdraw-total");

    const previousWithdrawTotalText = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)

   // console.log( previousWithdrawTotal)

    const newwithdrawTotal = previousWithdrawTotal + newwithdrawAmount;

    //console.log(newwithdrawTotal)
    
     withdrawTotal.innerText = newwithdrawTotal;
    // console.log(withdrawTotal)


    // Total Balance

    const balanceTotal = document.getElementById('balance-total');

        const previousBalanceTotalText = balanceTotal.innerText
        
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)
    
    const newBalanceTotal = previousBalanceTotal - newwithdrawTotal
    
    balanceTotal.innerText = newBalanceTotal

     withdrawInput.value =''
        
});
    

