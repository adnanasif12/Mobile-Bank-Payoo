document.getElementById('show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden')

})

// Add money btn add
document.getElementById('show-add-money').addEventListener('click',function(){

    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})