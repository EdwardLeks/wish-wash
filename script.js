var sb = document.getElementById("mySidebar")

function openNav() {
  sb.style.width = "250px";
}

function closeNav() {
  sb.style.width = "0";
}

$(window).scroll(function(){
	if($(document).scrollTop() > 0) {
			$('.header').addClass('active-header');
	} else {
			$('.header').removeClass('active-header');
	}
})

function onSubscribe(){
	gtag('event', 'subscribe')
	console.log('Subscribed')
}