const inputFild = document.getElementById('input');
const duble = document.getElementById('duble-fild');
const triple = document.getElementById('triple-fild');
document.getElementById('duble').addEventListener('click',function (){
    const inputValue = parseInt(inputFild.value) * 2;
    if (!isNaN(inputValue)) {
        
        duble.innerText = inputValue;
    }
    else{
        duble.innerText = 'Input a valid number please!';
    }
    inputFild.value = '';
})
document.getElementById('triple').addEventListener('click',function (){
    const inputValue = parseInt(inputFild.value) * 3;
    if (!isNaN(inputValue)) {
        
        triple.innerText = inputValue;
    }
    else{
        triple.innerText = 'Input a valid number please!';
    }
    inputFild.value = '';
})