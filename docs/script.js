// ISSUES
// -when i use[.canvas div:last child], the boxes appear inside the canvas, and are positioned correctly, but they seem to keep
// changing position, as the container itself also changes position and they are positioned around it
// -when using absolute position, the boxes are fixed, but the are all in the upper left corner

// Initialize variables;
var id = 0;

var val,
	red,
	green,
	blue,
	alpha,
	color;

var w,
	x,
	y,
	r,
	z=0;

// Creates random RGB value
function randomColor(){
	val = Math.floor(Math.random()*255);
	return val;
};


// Random Color Generator
function colorGenerator() {
	var red = randomColor();
	var green = randomColor();
	var blue = randomColor();
	var alpha = ((Math.round(Math.random()*10))-(Math.round(Math.random()*5)))*10 ; // I want this to be between .5 and 1
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	// var color = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
	$("#container div:last-child").css("background-color", color);
	// console.log("The new color is " + color);
	// return color;
};

// Random width generator
function widthGenerator(){
//set width and height
	var w = Math.floor(Math.random()*200);
	$("#container div:last-child").css({"width": w, "height": w});
	// console.log("The new width is " + w);
	// return w;
}

// Changes position of element by transform
function cssGenerator(){
	var x = Math.floor(Math.random()*1400) - 700 // Translation of x axis
	var y = Math.floor(Math.random()*800) - 400// Translation of y axis
	var r = Math.floor(Math.random()*180) // Degrees of rotation
	$("#container div:last-child").css({
		"left": x,
		"top": y,
		"-webkit-transform": "rotate(" +r +"deg)",
       	"-moz-transform": "rotate(" + r + "deg)",
       	"transform": "rotate(" + r + "120deg)"
    });

}

// Changes z-index
function zIndexGenerator(){
	//set z-axis
	$("#container div:last-child").css("z-index", z);
	// console.log("The new z-index is " + z);
	z+=1;

}

// CHANGE BOX (To practice changing box properties with js)
function changeBox(){
	var button = document.getElementsByClassName("button");
	button.addEventListener("click", function(){
		alert("it worked!");
	})
}
// Initialze Box
function boxInitialize(){

	colorGenerator();
	widthGenerator();
	cssGenerator();
	zIndexGenerator();
}

function boxGenerator(w, color){
	// Create new box
	var div = $("<div class='box' id='" + id +"'></div>");
	$("#container").append(div);

	// Create new box values
	boxInitialize();
	id += 1;

}

// for loop
var t = 0; // This is based on how many boxes you want to generate
// if statement or case statement => t = 1, t=5, t=10, t= 50

for (var i; i < t ; i++ ){
	var t = 5
	boxGenerator();
}

$("#button1").on("click", function(){
	boxGenerator();
	});

$("#button2").on("click", function(){
	for (var i = 0; i < 5; i++){
		boxGenerator();
	}
})

$("#button3").on("click", function(){
	for (var i = 0; i < 10; i++){
		boxGenerator();
	}
})

$("#button4").on("click", function(){
	for (var i = 0; i < 50; i++){
		boxGenerator();
	}
})

$("#reset").on("click", function(){
	$(".box").remove();
	id = 0;
	z = 0;
	$("#title, p").css("color", "black");
});

$("button:not(#reset)").on("click", function(){
	var red = randomColor();
	var green = randomColor();
	var blue = randomColor();
	var alpha = ((Math.round(Math.random()*10))-(Math.round(Math.random()*5)))*10 ; // I want this to be between .5 and 1
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	$("#title, p").css("color", color);
})
