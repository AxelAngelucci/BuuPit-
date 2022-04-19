const dir = '/public'
const hireButton = document.getElementById("hireButton");
const workButton = document.getElementById("workButton");


function windowOpen(element, dir, adress, place){
    element.onclick = function(){
        window.open(`${dir}${adress}`, `${place}`);
    }
}
windowOpen(hireButton, dir, '/hire.html#form-hire', '_self');
windowOpen(workButton, dir, '/work.html#form-work', '_self');