    
    
const counters = document.querySelectorAll('.counter');
const speed = 2; 

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc =  speed;
		// Check if target is reached
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
    
    
    
  
//Enquiry button open-close function
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
    
//sticky navbar while scolling
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Smooth scrolling

$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#home").offset().top-65
     }, 1000);
  return false;
 });

$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#about").offset().top-100
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#programs").offset().top-100
     }, 1000);
  return false;
 });


$("#s4").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#lipsum").offset().top-100
     }, 1000);
  return false;
 });
 
 $("#s5").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#dualdegree").offset().top-100
     }, 1000);
  return false;
 });




//youtube video section 5
 $('#modal1').on('hidden.bs.modal', function (e) {
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});

$('#modal8').on('hidden.bs.modal', function (e) {
  $('#modal8 iframe').attr("src", $("#modal8 iframe").attr("src"));
});

