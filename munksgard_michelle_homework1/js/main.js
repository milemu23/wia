/*
     Name: Michelle Munksgard
     Date: 9/03/2015
     Class & Section:  WIA-1509
     Comments: "HTML5 Canvas Drawing"
 */


window.onload = function(){

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
if(Modernizr.canvas){
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/


    var canvasOne = document.getElementById("part1");

    //context
    if(canvasOne){
        var ctx = canvasOne.getContext('2d');
       
        if(ctx){
            //style
            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue"
            
            //Draw Rectangle here
            ctx.fillRect(0,0,50,100);
            ctx.strokeRect(0,0,50,100);
        }
    }
    



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

    var canvasTwo = document.getElementById("part2");

    //context
    if(canvasTwo){
        var ctx = canvasTwo.getContext('2d');
       
        if(ctx){
            //style
            ctx.fillStyle = "rgba(153,0,0,.5)";
            ctx.strokeStyle = "black";
            
            //Draw Circle here
            var degrees = 360;
            var radians = (degrees/180)*Math.PI;
            
            ctx.beginPath();
            ctx.arc(50,50,20,0,radians);
            ctx.fill();
            ctx.stroke();
            
        }
    }





/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/
    var canvasThree = document.getElementById("part3");
    if(canvasThree){
        var ctx = canvasThree.getContext('2d');
        
        if(ctx){
            //style
            ctx.strokeStyle = "black";
            ctx.fillStyle = "pink";
            ctx.lineWidth = 5;
            
            //Draw Star here
            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.lineTo(125,50);
            ctx.lineTo(150,100);
            ctx.lineTo(200,100);
            ctx.lineTo(160,140);
            
            ctx.lineTo(180,195);
            ctx.lineTo(125,165);
            ctx.lineTo(70,195);
            ctx.lineTo(90,140);
            ctx.lineTo(50,100);
            ctx.closePath();
            
            ctx.fill();
            ctx.stroke();
        }
    }   




/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
    var canvasFour = document.getElementById("part4");
    if(canvasFour){
        var ctx = canvasFour.getContext('2d');
        
        if(ctx){
            //style
            ctx.strokeStyle = "black";
            ctx.lineWidth = 10;
            
            //Draw Umbrella top here
            
            ctx.beginPath();
            //(x,y(center point),radius, startAngle, endingAngle, Clockwise, Counter)
            ctx.arc(150,150,100,0, 1 * Math.PI, true);
            ctx.arc(70,150,20,0, 1 * Math.PI, true);
            ctx.arc(110,150,20,0, 1 * Math.PI, true);
            ctx.arc(150,150,20,0, 1 * Math.PI, true);
            ctx.arc(190,150,20,0, 1 * Math.PI, true);
            ctx.arc(230,150,20,0, 1 * Math.PI, true);
            ctx.stroke();
            
        }
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/
    var canvasFive = document.getElementById("part5");
    if(canvasFive){
        var ctx = canvasFive.getContext('2d');
        
        if(ctx){
            //Draw text here
            var myText = "Michelle";
            
            //style
            ctx.font = "20pt Courier";
            ctx.fillStyle = "#ff3399";
            ctx.fillText(myText, 20,60); 
        }
    }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/
    var canvasSix = document.getElementById("part6");
    if(canvasSix){
        var ctx = canvasSix.getContext('2d');
        
        if(ctx){
            var logoImage = document.getElementById('logo');
           
            //Draw images here
            //(src, destinationx, destinationy)
            ctx.drawImage(logoImage, 0,0);
            
            //scaled down
            //(src, destinationx, destinationy, w, h)
            ctx.drawImage(logoImage, 0, 1088, 1650, 544);
            
            //sliced
            //(src, sx, sy, sw, sh, destinationx, destinationy, w, h)
            ctx.drawImage(logoImage, 300, 300, 150, 150, 0, 1632, 300, 300);
           
        }
    }




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

    var canvasSeven = document.getElementById('part7');
    
    if(canvasSeven){
        var ctx = canvasSeven.getContext('2d');
        
        if(ctx){
            var scene = document.getElementById('scene');
            //draw background
            ctx.drawImage(scene, 0, 0);
            
             //style
            ctx.fillStyle = "rgba(100,0,100,.5)";
            
            //Draw Circle here
            var degrees = 360;
            var radians = (degrees/180)*Math.PI;
            
            ctx.beginPath();
            ctx.arc(400,200,20,0,radians);
            ctx.fill();
            
            //line
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(400, 220);
            ctx.lineTo(400, 320);
            ctx.stroke();
            
            //style
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            
            //Draw Circle here
            var degrees = 360;
            var radians = (degrees/180)*Math.PI;
            
            ctx.beginPath();
            ctx.arc(350,250,20,0,radians);
            ctx.stroke();
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(350, 270);
            ctx.lineTo(350, 400);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(350, 320);
            ctx.lineTo(400, 280);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(350, 320);
            ctx.lineTo(325, 275);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(325, 425);
            ctx.lineTo(350, 400);
            ctx.lineTo(375, 425);
            ctx.stroke();   
            
            //Draw text here
            var sceneText = "Walk with a Balloon";
            
            //style
            ctx.font = "20pt Courier";
            ctx.fillStyle = "#432455";
            ctx.fillText(sceneText, 220,60);
  
        }
    }

}else {
    //polyfill
}
}