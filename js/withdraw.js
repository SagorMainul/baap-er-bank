/*
1. add event handler withdraw button
2. get the withdraw ammount from the input field
2.5. also make sure t oconvert the imput a number by using aprseFloat
3.get previous withdraw total
4.calculate total withdraw amount
4.5.set total withdraw ammount
5. get teh prervious balance total
6.calculate new balance total
7.clear the input filed
*/

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
  //step-2:
  const withdrawField = document.getElementById('withdraw-field')
  const newWithdrawAmountString = withdrawField.value
  const newWithdrawAmount = parseFloat(newWithdrawAmountString)
  //step-7:
  withdrawField.value = ``
  if (isNaN(newWithdrawAmount)) {
    alert('Please enter a right amount')
    return
  }
  //step-3:
  const withdrawTotalElement = document.getElementById('withdraw-total')
  const previousWithdrawTotalString = withdrawTotalElement.innerText
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
  console.log(previousWithdrawTotal)

  //step-5:
  const balanceTotalElement = document.getElementById('balance-total')
  const previousBalanceTotalString = balanceTotalElement.innerText
  const previousBalanceTotal = parseFloat(previousBalanceTotalString)

  if (newWithdrawAmount > previousBalanceTotal) {
    alert('Bap er Bank e eto tk nai !!!!')
    return
  }
  //step-4:
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
  withdrawTotalElement.innerText = currentWithdrawTotal
  //step-6:
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
  balanceTotalElement.innerText = newBalanceTotal
})
