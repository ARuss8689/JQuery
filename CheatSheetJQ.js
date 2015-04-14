Cheat Sheet

$(document).ready(function(){
	});
//put all functions and actions within the document ready snippet to make sure it doesn't run until after the page is loaded

$("elementname").hide();
//hides an element

$("elementname").show();
//shows an element

$("elementname").fadeIn();
//has an element fade in

$("elementname").fadeIn(5000);
//by putting a number in the parenthesis, the function will perform over that many milliseconds
//in this instance, the element will fade in over 5000 milliseconds (5 seconds)

$("elementname").fadeOut();
//has an element fade out

$("elementname").slideUp();
//has an element disappear by sliding up
//by putting a number in the parenthesis, the element will slide up over that many milliseconds

$("elementname").slideDown();
//has an element appear by sliding down

$("elementname").animate({
});
//animates an element, changing any numerically based property such as width, height, margin, padding, opacity, etc.

$("elementname").animate({
	opacity: '0.5',
	width: '50px'
}, 2000);
//will change opacity to 50% and width to 50 pixels, over the course of 2000 milliseconds (2 seconds)

$("elementname").click(function)
//will cause a function to take place once the given element is clicked