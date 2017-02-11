
$(function() {

	// Initial Start Page

	$('.second-box').hide();

	//load
	frontPage();
	menuSlider();

	function frontPage() {
		
		$('.helper-container').css("background-color", homeCol).css("opacity", 0).fadeTo(1200, 0.9);
		$('.page-background').attr("src", homeImg);
		$('.header-image').attr("src", "/images/heyhihello.jpg");
		var text1 = "Future Full-Stack Developer and UX/UI designer, with practical experience in with practical experience of Agile Methodics and creative direction; devoted to functional programming and information architecture.";
		$('.text2').text(text1);

	} 


	$('.a-links').click(function() {

		$('.menu a').removeClass("active-menu");
		
		$(this).addClass("active-menu");

		$('.helper-container').animate({top: 800}, 2000);
		$('.page-background').fadeTo(2000, 0.1);
		
		var sectionName = $(this).attr('section-id');
	    
	    setTimeout(function(){
	    	loadWebSection(sectionName);
	    }, 1500);

	});


	function loadWebSection(sectionId) {


		$('.helper-container').animate({top: 0}, 1600);
		$('.text2').hide();
		$('.social-connect').hide();
		$('.second-box').show();

		var boxCol = sectionId + 'boxCol';
		var header = sectionId + 'Header'; 
		var text1 = sectionId + 'text1'; 
		var headerImg = sectionId + 'headerImg'; 

		if (sectionId == 'home'){
			frontPage();
		}

		if (sectionId == 'about'){
			boxCol = '#fff';
			headerImg = '/images/obig.png';
			header = 'About sjhsdjhds';
			text1 = 'About sjhsdjhds';
		}

		if (sectionId == 'dev'){
			skillBar();
			
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
		$('.header-image').attr("src", backgroundImg);


	}

	function menuSlider() {
		$('.nav-icon').click(function(){
	    	$('.menu').slideToggle(300, function(){
	    	});
	  	});
	}

	

	function skillBar() {
		$('.skillbar-open').show();

		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},3000);
		});

	}



});
