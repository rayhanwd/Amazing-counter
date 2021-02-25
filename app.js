let counter = document.getElementById('counter');
let count = 0;
document.getElementById("decrement").addEventListener("click", function(e) {
    e.preventDefault();  
    if(count >0){
    count-- ;
    counter.innerHTML = count;
    }
});

document.getElementById("increment").addEventListener("click", function(e) {
    e.preventDefault();
    count++ ;
    counter.innerHTML = count;
});