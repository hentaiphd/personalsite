var c=document.getElementById("box");
	var ctx=c.getContext("2d");
	ctx.fillStyle="#776387";
	ctx.fillRect(0,0,200,200);
	var boxColors = ["#FF99CC", "#ADBAFF", "#91E0FF", "#E791FF", "#EBB0FF"];

    function changeColorBox() {
        setInterval(boxColor, 50);
    }

    function boxColor() {
    	var x=Math.floor(Math.random()*5)
        if(x < 0) {
            ctx.fillStyle=boxColors[0];
         } else if(x < 1){
             ctx.fillStyle=boxColors[1];
         } else if(x < 2){
             ctx.fillStyle=boxColors[2];
         } else if(x < 3){
             ctx.fillStyle=boxColors[3];
         } else if(x <= 4){
             ctx.fillStyle=boxColors[4];
         }
      	ctx.fillRect(0,0,200,200);
     }

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
  		changeColorBox();
  		changeColorName();
	}
	
	window.onload = start;