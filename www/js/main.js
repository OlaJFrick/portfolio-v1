var skillObj = {
    "HTML5": [{ "strength": "95%", "color": "#d35400" }],
    "CSS3": [{ "strength": "90%", "color": "#2980b9" }],
    "JavaScript/jQuery": [{ "strength": "80%", "color": "#2c3e50" }],
    "Bootstrap": [{ "strength": "75%", "color": "#5a68a5" }],
    "Node.js": [{ "strength": "35%", "color": "#525252" }]
};

var socialObj = {
    "facebook": [{"className": "facebook-square", "url": "https://www.facebook.com/ola.frick"}],
    "twitter": [{"className": "twitter-square", "url": "https://twitter.com/olafrick_"}],
    "linkedin": [{"className": "linkedin-square", "url": "https://www.linkedin.com/in/olafrick"}],
    "behance": [{"className": "behance", "url": "https://www.behance.net/olafrick_"}],
    "git": [{"className": "git-square", "url": "https://github.com/OlaJFrick"}],
    "codepen": [{"className": "codepen", "url": "http://codepen.io/olafrick_/"}],
    "email": [{"className": "envelope-square", "url": "mailto:info@culturehero.org"}],
};


$(function() {

    //Initial load

    frontPage();
    menuSlider();
    navigationLinks();

    // FAKE CLICK WHILE WORKING

    // setTimeout(function() {
    //     $('.webdev').trigger("click");
    // }, 200);
    
});
    

function frontPage() {

    $('.front-box').show();
    $('.first-box').hide();
    $('.second-box').hide();

    /* DO NOT TOUCH */

    $('.helper-container').css("background-color", homeCol).css("opacity", 0).fadeTo(1200, 0.9);

    /* TEMP */

    $('.page-background').attr("src", homeImg);
    $('.front-image').attr("src", "/images/heyhihello.jpg");
    var text1 = "Future Full-Stack Developer and UX/UI designer, with practical experience in with practical experience of Agile Methodics and creative direction; devoted to functional programming and information architecture.";
    $('.front-text').text(text1);
    socialLinks();

}





function navigationLinks(){

    $('.a-links').click(function() {

        $('.menu a').removeClass("active-menu");
        $(this).addClass("active-menu");

        /* DO NOT TOUCH */

        $('.helper-container').animate({top: 800}, 2000);
        $('.page-background').fadeTo(2000, 0.1);

        /* TEMP */

        var sectionName = $(this).attr('section-id');

        setTimeout(function() {
            loadWebSection(sectionName);
             }, 1500);  
       
        /* TEMP */
        // }, 100);

    });
}



function loadWebSection(sectionId) {

    $('.front-box').hide(300);
    $('.first-box').show();
    $('.second-box').show();

    $('.helper-container').animate({ top: 0 }, 1600);
    $('.second-box').show();

    var boxCol = sectionId + 'boxCol';
    var header = sectionId + 'Header';
    var text1 = sectionId + 'text1';
    var headerImg = sectionId + 'headerImg';

    if (sectionId == 'home') {
        $('.front-box').show();
        $('.first-box').hide();
        $('.second-box').hide();
        frontPage();
    }

    if (sectionId == 'about') {
        boxCol = '#fff';
        headerImg = '/images/obig.png';
        header = 'About sjhsdjhds';
        text1 = 'About sjhsdjhds';
    }

    if (sectionId == 'dev') {
        loadDevSection();

        // STILL CLUMPSY. JSON or WAIT UNTIL Angular
        createSection(
            '#fff', 'Student Webdeveloper at Lernia', "I'm currently a student at Lernia School, in Malmö, becoming a full-stack Developer with practical experience of Agile Methodics. I love the JavaScript language and i'm devoted to eventully master functional programming and information architecture.", '');
    }

    if (sectionId == 'music') {
        boxCol = '#fff';
        headerImg = '/images/obig.png';
        header = '';
        text1 = 'Aasdsdasaddsa';
    }

    if (headerImg == '') {
        $('.header-image').hide();
    } else {
        $('.header-image').show();
    }

    if (sectionId == 'dev') {
        $('.skillbar-open').show();
    } else {
        $('.skillbar-open').hide();
    }

}

function createSection(boxCol, header, text1, backgroundImg) {
    $('.first-box').css("background-color", boxCol);
    $('.header-content .header').text(header);
    $('.text1').text(text1);
    $('.header-image').attr("src", backgroundImg);
}

function menuSlider() {
    $('.nav-icon').click(function() {
        $('.menu').slideToggle(300, function() {});
    });
}



function socialLinks() {

    $('.front-page-end-content').append('<div class="social-connect"></div>');

    for(var key in socialObj) {

        socialObj[key].forEach((social) =>{
            var socialLink = '<a class="fa fa-' + social.className + ' fa-2x" href="' + social.url + '" target="_blank" aria-hidden="true"></a>';
            $('.social-connect').append(socialLink);

        });
    }
    var endLink = '<br><a class="a-links" section-id="dev" style="text-decoration: underline;">Learn more about me</a>';
    $('.social-connect').append(endLink);
}


function loadDevSection() {

    $('.custom-page-content').append('<div class="skillbar-open"></div>');

    for (var key in skillObj) {

        skillObj[key].forEach(function(skills) {
            var div1 = '<div class="skillbar clearfix " data-percent="' + skills.strength + '">';
            var div2 = '<div class="skillbar-title" style="background: ' + skills.color + ' ;"><span>' + key + '</span></div>';
            var div3 = '<div class="skillbar-bar" style="background: ' + skills.color + ';"></div>';
            var div4 = '<div class="skill-bar-percent">' + skills.strength + '</div></div>';

            $('.skillbar-open').append(div1 + div2 + div3 + div4);
        });
    }

    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 3000);
    });
}