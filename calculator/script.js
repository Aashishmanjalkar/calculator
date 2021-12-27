console.log('this is a calculator');

input = document.getElementById('input');
buttn = document.querySelectorAll('button');
let screenValue = ""
for(item of buttn){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log("the button text is ", buttontext);
        if(buttontext == "X"){
            buttontext = '*'
            screenValue += buttontext;
            input.value = screenValue;
        }else if(buttontext == 'C'){
            screenValue = '';
            input.value = screenValue;
        }else if(buttontext == '>'){
           let number  = input.value;
           let len = number.length-1;
           let newNumber = number.substring(0,len);
           input.value = newNumber;
        }
        else if(buttontext == '='){
            input.value = eval(screenValue);
        }else{
            screenValue += buttontext;
            input.value = screenValue;
        }
        
    })
    
    
    
}
