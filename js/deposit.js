// step-1: add event listerner to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
  //step-2: get the deposite amount from the deposite input field
  //for input filed .value get the value of the input field
  const depositField = document.getElementById('deposit-field')
  const depositeAmount = depositField.value
  //step-3: get the deposit current total amount
  //for non-input (element other thand input and textarea)
  const depositTotalElement = document.getElementById('deposit-total')
  const depositTotal = depositTotalElement.innerText
  depositTotalElement.innerText = depositeAmount
})
