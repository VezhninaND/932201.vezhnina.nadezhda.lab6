function rightColumn(){
	document.getElementById("left-img").style.display = "none";
	document.getElementById("right-img").style.display = "block";
	document.getElementById("right-column").style.width = "95%";
	document.getElementById("left-column").style.width = "5%";
	document.getElementById("right-img").style.width = "auto";
}
function leftColumn(){
	document.getElementById("right-img").style.display = "none";
	document.getElementById("left-img").style.display = "block";
	document.getElementById("left-column").style.width = "95%";
	document.getElementById("right-column").style.width = "5%";
	document.getElementById("left-img").style.width = "auto";

}
function bothColumns(){
	document.getElementById("left-img").style.display = "block";
	document.getElementById("right-img").style.display = "block";
	document.getElementById("right-column").style.width = "50%";
	document.getElementById("left-column").style.width = "50%";
	document.getElementById("left-img").style.width = "461px";
	document.getElementById("right-img").style.width = "461px";
}