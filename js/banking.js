function getInputValue(inputId) {
	const inputField = document.getElementById(inputId);

	const inputAmountText = inputField.value;
	const inputAmount = parseFloat(inputAmountText);
	inputField.value = "";
	return inputAmount;
}

function updateTotalField(totalFieldId, totalAmount) {
	const previoustotal = document.getElementById(totalFieldId);
	const previousTotalText = previoustotal.innerText;
	const previousTotalAmount = parseFloat(previousTotalText);
	const newprevioustotal = totalAmount + previousTotalAmount;
	previoustotal.innerText = newprevioustotal;
}

function updateBalance(totalAmount, isAdd) {
	const balanceTotal = document.getElementById("balance-total");

	const previousBalanceTotalText = balanceTotal.innerText;

	const previousBalanceTotal = parseFloat(previousBalanceTotalText);

	if (isAdd == true) {
		const newBalanceTotal = previousBalanceTotal + totalAmount;

		balanceTotal.innerText = newBalanceTotal;
	} else {
		const newBalanceTotal = previousBalanceTotal - totalAmount;

		balanceTotal.innerText = newBalanceTotal;
	}
}

document
	.getElementById("deposit-button")
	.addEventListener("click", function () {
		// Deposit Input value

		// const inputField = document.getElementById("deposit-input");
		// const inputAmountText = inputField.value;
		// const inputAmount = parseFloat(inputAmountText);

		const totalAmount = getInputValue("deposit-input");

		// const previoustotal = document.getElementById("deposit-total");

		// const previousTotalText = previoustotal.innerText;

		// const previousTotalAmount = parseFloat(previousTotalText);

		// const newprevioustotal = totalAmount + previousTotalAmount;
		// previoustotal.innerText = newprevioustotal;

		updateTotalField("deposit-total", totalAmount);

		// Total balance
		/* const balanceTotal = document.getElementById("balance-total");

		const previousBalanceTotalText = balanceTotal.innerText;

		const previousBalanceTotal = parseFloat(previousBalanceTotalText);

		const newBalanceTotal = previousBalanceTotal + inputAmount;

		balanceTotal.innerText = newBalanceTotal; */

		updateBalance(totalAmount, true);
	});

document
	.getElementById("withdraw-button")
	.addEventListener("click", function () {
		//   Withdraw input
		// const withdrawInput = document.getElementById("withdraw-input");

		// const withdrawAmountText = withdrawInput.value;
		// const newwithdrawAmount = parseFloat(withdrawAmountText);

		const withdrawAmount = getInputValue("withdraw-input");

		// get and uddate withdraw

		// const withdrawTotal = document.getElementById("withdraw-total");
		// const previousWithdrawTotalText = withdrawTotal.innerText;
		// const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
		// const newwithdrawTotal = previousWithdrawTotal + withdrawAmount;
		// withdrawTotal.innerText = newwithdrawTotal;
		// console.log(withdrawTotal)
		updateTotalField("withdraw-total", withdrawAmount);

		// Total Balance

		/*    const balanceTotal = document.getElementById("balance-total");

		const previousBalanceTotalText = balanceTotal.innerText;

		const previousBalanceTotal = parseFloat(previousBalanceTotalText);

		const newBalanceTotal = previousBalanceTotal - newwithdrawTotal;

		balanceTotal.innerText = newBalanceTotal; 

		withdrawInput.value = "";  */

		updateBalance(withdrawAmount, false);
	});
