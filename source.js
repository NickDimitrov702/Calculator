const billInput = document.getElementsByClassName('input-bill')
const peopleInput = document.getElementsByClassName('input-people')
const tipAmountPerson = document.getElementById('tip-amount-price')
const totalAmountPerson = document.getElementById('total-amount-price')
const percentige = document.querySelectorAll('.percentige-butt')
const inputPercentige = document.getElementsByClassName('percentige-butt')
const resetBtn = document.getElementById('reset')

percentige.forEach(function (currentButton) {
    currentButton.addEventListener('click', calculatorInput)
})

resetBtn.addEventListener('click',resetButton )

function calculatorInput(e) {
    e.preventDefault()

    let event = e.target;

    let fivePercent = inputPercentige[0].value;
    let tenPercent = inputPercentige[1].value;
    let fifteenPercent = inputPercentige[2].value;
    let twentyFivePercent = inputPercentige[3].value;
    let fiftyPercent = inputPercentige[4].value;
    let custom = inputPercentige[5].value;

    if (event.value == fivePercent) {
        inputPercentige[0].style = 'background-color: rgb(3, 175, 175);'
        inputPercentige[1].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[2].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[3].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[4].style = 'background-color: rgb(9, 73, 73);'
        if (billInput[0].value != 0 && peopleInput[0] != 0) {
            let totalBill = billInput[0].value
            let totalPeople = peopleInput[0].value
            let tipsResult = ((5 / 100) * totalBill).toFixed(1)
            let grandTotal = Number(totalBill) + Number(tipsResult);
            tipAmountPerson.innerHTML = `$${(tipsResult / totalPeople).toFixed(1)}`
            totalAmountPerson.innerHTML = `$${(grandTotal / totalPeople).toFixed(1)}`
        }

        

    } else if (event.value == tenPercent) {
        inputPercentige[0].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[2].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[3].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[4].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[1].style = 'background-color: rgb(3, 175, 175);'
        let totalBill = billInput[0].value
        let totalPeople = peopleInput[0].value
        let tipsResult = ((10 / 100) * totalBill).toFixed(1)
        let grandTotal = Number(totalBill) + Number(tipsResult);
        tipAmountPerson.innerHTML = `$${(tipsResult / totalPeople).toFixed(1)}`
        totalAmountPerson.innerHTML = `$${(grandTotal / totalPeople).toFixed(1)}`

    } else if (event.value == fifteenPercent) {
        inputPercentige[0].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[1].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[3].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[4].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[2].style = 'background-color: rgb(3, 175, 175);'
        let totalBill = billInput[0].value
        let totalPeople = peopleInput[0].value
        let tipsResult = ((15 / 100) * totalBill).toFixed(1)
        let grandTotal = Number(totalBill) + Number(tipsResult);
        tipAmountPerson.innerHTML = `$${(tipsResult / totalPeople).toFixed(1)}`
        totalAmountPerson.innerHTML = `$${(grandTotal / totalPeople).toFixed(1)}`

    } else if (event.value == twentyFivePercent) {
        inputPercentige[0].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[1].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[2].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[4].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[3].style = 'background-color: rgb(3, 175, 175);'
        let totalBill = billInput[0].value
        let totalPeople = peopleInput[0].value
        let tipsResult = ((25 / 100) * totalBill).toFixed(1)
        let grandTotal = Number(totalBill) + Number(tipsResult);
        tipAmountPerson.innerHTML = `$${(tipsResult / totalPeople).toFixed(1)}`
        totalAmountPerson.innerHTML = `$${(grandTotal / totalPeople).toFixed(1)}`

    } else if (event.value == fiftyPercent) {
        inputPercentige[0].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[1].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[2].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[3].style = 'background-color: rgb(9, 73, 73);'
        inputPercentige[4].style = 'background-color: rgb(3, 175, 175);'
        let totalBill = billInput[0].value
        let totalPeople = peopleInput[0].value
        let tipsResult = ((50 / 100) * totalBill).toFixed(1)
        let grandTotal = Number(totalBill) + Number(tipsResult);
        tipAmountPerson.innerHTML = `$${(tipsResult / totalPeople).toFixed(1)}`
        totalAmountPerson.innerHTML = `$${(grandTotal / totalPeople).toFixed(1)}`

    } else if (event.value == custom) {
        console.log('CUstom')
    }

}

function resetButton(e) {
    e.preventDefault()
    billInput[0].value = 0;
    peopleInput[0].value = 0;
    tipAmountPerson.innerHTML = `$0.00`;
    totalAmountPerson.innerHTML  = `$0.00`;
    percentige.forEach(btn => {
        btn.style = 'background-color: rgb(9, 73, 73);'
    })
}

function customBtn(e) {

    let customBtnToChange = document.getElementById('custom-btn')

    
    const newBtn = document.createElement('input') 
    newBtn.setAttribute(custom,0)
    
}
