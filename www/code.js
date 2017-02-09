$(function() {

	// $('body').css('background-color', 'blue');

	// Using setTimeout / clearTimeout 
	// for a automatic click 
	// if the user hasn't clicked before 2 seconds
	// Using setTimeout / clearTimeout 
	// for a automatic click 
	// if the user hasn't clicked before 2 seconds
	// var clickTrigger = setTimeout(function() {
	//     $(".aButton").click();
	// }, 2000);

	$('.aButton').click(function() {
	    resetState();
	    // clearTimeout(clickTrigger);
	    animate();
	});

	function animate() {
	    $('.drawer-1').animate({ left: '0' }, 1000);
	    $('.drawer-2').animate({ left: '0' }, 800);
	    $('.drawer-3').animate({ left: '0' }, 600);
	    $('.drawer-4').animate({ left: '0' }, 400);
	    $('.drawer-5').animate({ left: '0' }, 200);

	    setTimeout(function() {
	        $('.drawer-1').animate({ left: '100%' }, 600);
	        $('.drawer-2').animate({ left: '100%' }, 800);
	        $('.drawer-3').animate({ left: '100%' }, 1000);
	        $('.drawer-4').animate({ left: '100%' }, 1200);
	        $('.drawer-5').animate({ left: '100%' }, 1400);
	    }, 1000);

	}

	function resetState() {
	    $('.drawer-1').css('left', '-100%');
	    $('.drawer-2').css('left', '-100%');
	    $('.drawer-3').css('left', '-100%');
	    $('.drawer-4').css('left', '-100%');
	    $('.drawer-5').css('left', '-100%');
	}
});
