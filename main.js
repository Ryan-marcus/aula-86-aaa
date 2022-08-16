const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromULR("BirthdayImage.jpg", function(Img) {
        blockImageObject=Img;
        blockImageObject.scaleToWidht(700);
        blockImageObject.scaleToHeigth(510);
        blockImageObject.set({
            top:0,
            left:0
        })
        canvas.add(blockImageObject)
    })
	
}

function playSound(){
	x.play();
}
