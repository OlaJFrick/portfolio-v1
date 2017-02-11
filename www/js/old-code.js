
$(function() {

	// Initial Start Page
	// 
	$('.header-image').hide();
		
	// $('.front-page-background').fadeTo(1200, 0.7);
	// $('.helper-container').css("background-color", frontCol).fadeIn(1000);
	$('.helper-container').css("background-color", homeCol);
	$('.page-background').attr("src", homeImg);
	$('.green-box .header-content').html(homeFirst);
	// // $('.green-box p').text(homeText);
	// $('.blue-box p').text(homeSec);

	$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},3000);
		});

	// Menu
	menuSlider();

	$('.menu a').click(function() {
		$('.menu a').removeClass("active-menu");
		$(this).addClass("active-menu");

		$('.page-background').fadeTo(400, 0.1);
		var sectionName = $(this).attr('section-id');
	    loadWebSection(sectionName);
	});


	function loadWebSection(sectionId) {


		var boxCol = sectionId + 'boxCol';
		var header = sectionId + 'Header'; 
		var text1 = sectionId + 'text1'; 
		var headerImg = sectionId + 'headerImg'; 


		if (sectionId == 'about'){
			boxCol = '#fff';
			headerImg = '/images/obig.png';
			header = 'About sjhsdjhds';
			text1 = 'About sjhsdjhds';
		}

		if (sectionId == 'dev'){
			skillbar();
			$('.skillbar-open').show();
			boxCol = '#fff';
			headerImg = '';
			header = 'Student Webdeveloper at Lernia';
			text1 = "I'm currently a student at Lernia School, in Malmö, becoming a full-stack Developer with practical experience of Agile Methodics. I love the JavaScript language and i'm devoted to eventully master functional programming and information architecture.";
		}

		if (sectionId == 'music'){
			boxCol = '#fff';
			headerImg = '/images/obig.png';
			header = '';
			text1 = 'Aasdsdasaddsa';
		}

		if(headerImg == ''){
			$('.header-image').hide();
		} else {
			$('.header-image').show();
		}

		if(sectionId == 'dev'){
			$('.skillbar-open').show();
		} else {
			$('.skillbar-open').hide();
		}


		$('.first-box').css("background-color", boxCol);
		$('.header-content .header').text(header);
		$('.text1').text(text1);


		// console.log(typeof(sectionId) + sectionId);
		// var nnn = sectionId + 'First';
		// console.log(typeof(nnn) + nnn);
		
		// var backgroundCol = '';
		// var backgroundImg = '';
		// var mainFirst = '';
		// var mainSec = '';

		// backgroundCol = aboutCol;
		// backgroundImg = aboutImg;
		// mainFirst = aboutFirst;
		// mainSec = aboutSec;

		// if (sectionId == 'home'){
		// 	mainFirst = homeFirst;
		// 	mainSec = homeSec;
		// 	backgroundCol = homeCol;
		// 	backgroundImg = homeImg;
		// } else if (sectionId == 'about') {
		// 	backgroundCol = aboutCol;
		// 	backgroundImg = aboutImg;
		// 	mainFirst = aboutFirst;
		// 	mainSec = aboutSec;
		// } else if (sectionId == 'dev') {
		// 	backgroundCol = devCol;
		// 	backgroundImg = devImg;
		// 	mainFirst = devFirst;
		// 	mainSec = devSec;
		// } else if (sectionId == 'design') {
		// 	mainFirst = musicFirst;
		// 	mainSec = musicSec;
		// }	else if (sectionId == 'music') {
		// 	mainFirst = musicFirst;
		// 	mainSec = musicSec;
		// }	else if (sectionId == 'contact') {
		// 	mainFirst = musicFirst;
		// 	mainSec = musicSec;
		// }


	// 	setTimeout(function() {
	// 	    $('.helper-container').css("background-color", backgroundCol);
	// 	    // $('.page-background').attr("src", backgroundImg).fadeTo(400, 0.7);
	// 	    $('.page-background').attr("src", backgroundImg);
	// 	    // $('.green-box p').First(mainText);
	// 	    $('.green-box .header-content').html(mainFirst);
	// 	    $('.blue-box p').text(mainSec);
	// 	    $('a').addClass('.active-menu');
	// 	// }, 600);
	// });


	}

	function menuSlider() {
		$('.nav-icon').click(function(){
	    	$('.menu').slideToggle(300, function(){
	    	});
	  	});
	}

	function skillBar() {
		
	}



});
