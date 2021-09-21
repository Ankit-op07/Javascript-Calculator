let screen =document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText== 'x'){
            buttonText ='*';
            screenValue+=buttonText;
           screen.value = screenValue;
        }else if(buttonText== 'AC'){
            screenValue="";
            screen.value = screenValue;
        }else if(buttonText == '='){
            screen.value =eval(screenValue);
        }else if(buttonText == 'D'){
let str = screenValue;
screenValue=str.slice(0,str.length-1);
screen.value=screenValue;

        }
        else {
            screenValue+=buttonText;
            screen.value = screenValue;
        }
    })
    
}