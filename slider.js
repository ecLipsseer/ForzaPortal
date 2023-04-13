let counter = 1
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++
    if(counter > 2){
        counter = 1
    }
    
    
}, 5000)
