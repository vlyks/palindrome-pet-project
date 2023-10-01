const finalButton = document.getElementById('btn-check')
const input = document.getElementById('writePal')
const final = document.getElementById('finAnswer')

finalButton.onclick = () => {
    if (input.value === input.value.toString().split("").reverse().join(''))
     {final.textContent = "Yes!  " + input.value +" is a palindrome! =)"}
    else {final.textContent = "Naah, " + input.value +" is not a palindrome =("}
}
