// Add money step-1
/**
 * add event listener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 
 * step:2
 * get the money which user wants to add
 * also, get the pin number provided
 * 
 * step:3
 * verify the pin number. for, wrong pin number ==> failed to add 
 * for right pin number, allow to add the number ti the account balance
 * 
 * step:4
 * get the current blance
 * add money to be added with the current blance
 * 
 * display or update the blance in the DOM/UI

*/

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    // step:2 ---> get money from the userSelect: 
    const addMoney = document.getElementById('add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('pin-number').value;

//     step:3
//  check the valid pin number
    if (pinNumber==='1234') {
        // console.log('done')

        // new Balance
        const balance =document.getElementById('account-balance').innerText;
                // console.log(balance);
        const balanceNumber = parseInt(balance);
        console.log(balanceNumber)
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText= newBalance;

        
    } else {
        alert('invalid input, Please try again leter.')
    }
    

})


