document.getElementById('screen-input').value = '';
function buttonClick(num){
   let screen = document.getElementById('screen-input');
   screen.value += num;
    if(num == ''){
        screen.value = num;
    }
}
function backSpace(){
    var screen = document.getElementById('screen-input').value;
    var backSpace = screen.slice(0, screen.length - 1);
    document.getElementById('screen-input').value = backSpace;
}
function equalTo(){
    let screen = document.getElementById('screen-input');
    screen.value = eval(screen.value);
}