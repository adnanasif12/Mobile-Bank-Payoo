// step-1: set event handller

document.getElementById('login-btn').addEventListener('click', function(event) {

    // step-2 pervent default for realoading page
    event.preventDefault();
    // console.log('log in clicked')

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)

    // check validet input
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in')
        window.location.href = '/home.html'

    } else {
        alert('Wrong phone number or pin')
    }
})