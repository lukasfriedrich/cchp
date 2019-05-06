var menu = document.querySelector("#flyoutMenu");
var menuButton = document.querySelector(".navbar-toggler.first-button");
var video = document.querySelector("video");
var pageURL = "";

menuButton.addEventListener("click", showMenu, false);
menu.addEventListener("click", hideMenu, false);

function showMenu(e) {
	menu.classList.add("show");
	document.body.style.overflow = "hidden";
} 

function hideMenu(e) {
	menu.classList.remove("show");
	e.stopPropagation();
	
	setTimeout(function() {
	   	$('.animated-icon1').toggleClass('open');
		$('.animated-icon2').toggleClass('open');
		$('.animated-icon3').toggleClass('open');
		document.body.style.overflow = "auto";
	}, 400);	
}

video.addEventListener('ended',function(e) {
	video.src = "img/hg-bild.jpg";
	$("#startText").css("display", "flex");
	setTimeout(function() {
		var typed = new Typed('#typed', {
    	stringsElement: '#typed-strings',
    	typeSpeed: 40
  		});	
	}, 1);
	
})

$("#arbeiten img + a").on("click", function(event){
	event.preventDefault();
	pageURL = window.location.pathname;
	const href = $(this).attr("href");
	window.history.pushState(null, null, href);
	console.log(pageURL);
	$.ajax({
		url: href,
		success: function(data){
			$("section.view.intro-video").fadeOut(450).remove();
			$("main").fadeOut(450, function () {
				const newPage = $(data).filter("main").html();
				$("main").html(newPage);
				$("main").fadeIn(450);
				$("header").css("height","initial").css("margin-top","8rem");
				$(".navbar").css("background-color", "#EE7879 !important");
				$(".navbar").removeClass("scrolling-navbar");
			});
		}
	})
})

// window.addEventListener('popstate', function(event) {
//     // The popstate event is fired each time when the current history entry changes.
//       history.pushState(null, null, pageURL);
//       console.log(pageURL);
//       $.ajax({
// 		url: pageURL,
// 		success: function(data){
			
// 			$("main").fadeOut(450, function () {
// 				const newPage = $(data).filter("main").html();
// 				const newVideo	= $(data).filter("section.view.intro-video").html();
// 				$("section.view.intro-video").html(newVideo);
// 				$("section.view.intro-video").fadeIn(450).remove();
// 				$("main").html(newPage);
// 				$("main").fadeIn(450);
// 				/*$("header").css("height","initial").css("margin-top","8rem");
// 				$(".navbar").css("background-color", "#EE7879 !important");
// 				$(".navbar").removeClass("scrolling-navbar");*/
// 			});
// 		}
// 	})

// }, false);