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
 * verify the pin number. for, wrong pin number ==> failed to add parseFloat/integer
 * for right pin number, allow to add the number ti the account balance
 * 
 * step:4
 * get the current blance
 * add money to be added with the current blance
 * 
 * display or update the blance in the DOM/UI

*/

document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('pin-number-secondary').value;

    if (pinNumber === '1234') {
        // console.log('done');
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cashOutNumber  = parseFloat(cashOut);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;

    } else {
        alert('invalid input, please try again leter.');
        
    }



})

