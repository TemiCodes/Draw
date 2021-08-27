
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 color = "red";
 var mouseEvent = "Empty";
 var last_position_x,last_position_y;
 width = 2;
 canvas.addEventListener("mousedown",mousedown);
 function mousedown(e){
     color = document.getElementById("color_input").value;
     width = document.getElementById("width_input").value;
     mouseEvent = "MouseDown";
 }
 canvas.addEventListener("mouseup",mouseup);
 function mouseup(e){
     mouseEvent = "Mouseup";
 }
 canvas.addEventListener("mouseleave",mouseleave);
 function mouseleave(e){
     mouseEvent = "Mouseleave";
 }
 canvas.addEventListener("mousemove",mousemove);
 function mousemove(e){
     current_position_x = e.clientX - canvas.offsetLeft;
     current_position_y = e.clientY - canvas.offsetTop;
      if (mouseEvent == "MouseDown") {
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width;
     console.log("last X pos = " + last_position_x + "last Y pos = " + last_position_y);
     ctx.moveTo(last_position_x,last_position_y);
     console.log(" current X pos = " + current_position_x + "current Y pos" + current_position_y);
     ctx.lineTo(current_position_x,current_position_y);
     ctx.stroke();
 }
 last_position_x = current_position_x;
 last_position_y = current_position_y;
 
 }
 function clear_area(){
     ctx.clearRect(0,0,ctx.width,ctx.height)
 }
