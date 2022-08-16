// step-1: add event listerner to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
  //step-2: get the deposite amount from the deposite input field
  //for input filed .value get the value of the input field
  const depositField = document.getElementById('deposit-field')
  const newDepositeAmountString = depositField.value
  const newDepositAmount = parseFloat(newDepositeAmountString)
  //step-3: get the deposit current total amount
  //for non-input (element other thand input and textarea)
  const depositTotalElement = document.getElementById('deposit-total')
  const previousDepositTotalString = depositTotalElement.innerText
  previousDepositTotal = parseFloat(previousDepositTotalString)
  //ste-4: add numberts t oset the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount
  //set the deposit total amount
  depositTotalElement.innerText = currentDepositTotal
  //step-5: get balance current total
  const balanceTotalElement = document.getElementById('balance-total')
  const previousBalanceTotalString = balanceTotalElement.innerText
  const previousBalanceTotal = parseFloat(previousBalanceTotalString)
  //step-6: calculate current toal balance amount
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount
  //set the balance total amount
  balanceTotalElement.innerText = currentBalanceTotal
  //step-7: clear the deposit field
  depositField.value = ''
})
