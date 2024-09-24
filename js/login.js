// step-1: set event handller

document.getElementById('login-btn').addEventListener('click', function(event) {

    // step-2 pervent default for realoading page
    event.preventDefault();
    console.log('log in clicked')

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})