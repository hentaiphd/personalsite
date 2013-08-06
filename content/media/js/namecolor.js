var boxColors = ["#FF99CC", "#ADBAFF", "#91E0FF", "#E791FF", "#EBB0FF"];

function changeColorName(){
    var myName = document.getElementById('myName').cells;
    for(i = 0; i < myName.length; i++){
	    var x=Math.floor(Math.random()*5)
        if(x < 0) {
            myName[i].style.color = boxColors[0];
         } else if(x < 1){
             myName[i].style.color = boxColors[1];
         } else if(x < 2){
             myName[i].style.color = boxColors[2];
         } else if(x < 3){
             myName[i].style.color = boxColors[3];
         } else if(x <= 4){
             myName[i].style.color = boxColors[4];
         }
	}      
} 

function start() {
		changeColorName();
}

window.onload = start;