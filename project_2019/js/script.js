/* logo ===========================
document.getElementById('logo').onclick = function() {
  if ( this.style.animationPlayState != 'running' ) {
    this.style.animationPlayState = 'running';
  } else {
    this.style.animationPlayState = 'paused';
  }
}
*/




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

/* анімація центрального напису ===========================*/
var elem = document.getElementById("svgContainer");
var animData = {
container: elem,
renderer: "svg",
loop: false,
autoplay: true,
 path: 'https://assets1.lottiefiles.com/packages/lf20_bzpzXJ.json'
};
anim = lottie.loadAnimation(animData);


/* зміна фонового кольору при наведенні ===========================*/
 function changeItem2() {
  document.getElementById('mychangebody').style.background = 'rgba(8,45,47,.95)';
}
function rechangeItem2() {
  document.getElementById('mychangebody').style.background = 'rgba(0,15,14,.95)';
}
 function changeItem3() {
  document.getElementById('mychangebody').style.background = 'rgba(77,85,71, .95)';
}
function rechangeItem3() {
  document.getElementById('mychangebody').style.background = 'rgba(0,15,14,.95)';
}
 function changeItem4() {
  document.getElementById('mychangebody').style.background = 'rgba(103,97,58, .95)';
}
function rechangeItem4() {
  document.getElementById('mychangebody').style.background = 'rgba(0,15,14,.95)';
}