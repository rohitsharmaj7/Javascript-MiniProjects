var noOfSquares=6;
var colors= generateRandomColors(noOfSquares);
var squares=document.querySelectorAll(".square");

var pickedColor=pickColor();  
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector('h1');
var modebutton=document.querySelectorAll('.mode');

for(var i=0;i<modebutton.length;i++)
{
	modebutton[i].addEventListener("click",function()
	{
		modebutton[0].classList.remove("selected");
		modebutton[1].classList.remove("selected");
		this.classList.add("selected");
        if(this.textContent==="Easy")
        {
        	noOfSquares=3;
        }
        else
        {
        	noOfSquares=6;
        }
		reset();
	})
}

var resetButton=document.querySelector('#reset');
 resetButton.addEventListener("click",function(){
   reset();
 })

function reset()
{
	colors=generateRandomColors(noOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++)
    {
    	if(colors[i])
    	{
    		squares[i].style.display="block";
    	    squares[i].style.background=colors[i];
    	}
    	else
    	{
    		squares[i].style.display="none";
    	}
    } 
    h1.style.background="steelblue";
}


for(var i=0;i<squares.length;i++)
{
	// add initial color to the squres
	squares[i].style.background= colors[i];

	// add click listener to the squares
	squares[i].addEventListener("click",function(){
	    //  grab color and compare
		var clickedColor=this.style.background;
		if(clickedColor ===  pickedColor)
		{
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play Again";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else
		{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColors(color)
{
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pickColor()
{
	// multiply by 6(to get no less than 6) + 1(to get 6 also)
    var random=Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num)
{
    //array
    //add num random colors to array
    var arr=[];
    for(var i=0;i<num;i++)
    {
    	//get random color and push into array
        arr.push(randomColor());
    }
    console.log(arr);
    return arr;
}

function randomColor()
{
	//pick a red from 0-255
	//pick a green 0-255
	//pick blue 0-255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	//make in formatergb(r,g,b)
	return "rgb("+r+", "+g+", "+b+")";
}