$(document).ready(function () {
    // NAV SCROLL SHIZZ
    let prevScrollPos = 0;
    $(window).scroll(function(){
        if($(window).width() <= 926) {
            if ($(this).scrollTop() > prevScrollPos) {
                $('nav').css('opacity', '0');
            }
            else if ($(this).scrollTop() == prevScrollPos) {
                // Do nothing -- IE fix
            }
            else {
                $('nav').css('opacity', '1');
            }
            prevScrollPos = $(this).scrollTop();
        }
    });
    
    // SCROLL TO SECTION
   $('nav ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
       return false;
   });

    // POPUP INFO
    $("#html").on("click", function () {
        $('#popupInfo #heading').text("HTML / CSS");
        $('#popupInfo #content').html(descriptions.html);
        $('#popupInfo').show("fade");
    });

    $("#js").on("click", function () {
        $('#popupInfo #heading').text("JavaScript");
        $('#popupInfo #content').html(descriptions.js);
        $('#popupInfo').show("fade");

    });

    $("#backend").on("click", function () {
        $('#popupInfo #heading').text("Backend");
        $('#popupInfo #content').html(descriptions.backend);
        $('#popupInfo').show("fade");
    });

    // CLOSE POPUP SECTION
    $(".close").on('click', function () {
        $("#popupInfo").hide("fade");
        $('html, body').css('overflow', 'auto')
    });

    // POPULATE PROJECTS SECTION
    var projectDivs = projects.map(createProject).join('');
    $(".projects section").html(projectDivs);

    // SR CONFIG
    window.sr = ScrollReveal();

    sr.reveal('.featurette img', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2
    });

    sr.reveal('.featurette section', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        viewFactor: 0.2
    });

    sr.reveal('.box, .project', {
        duration: 2000,
        viewFactor: 0.1
    });

});

function createProject(obj) {
    return '<div class="project"><img src=' + obj.img + '><span class="projectDetails"><h5>' + obj.name + '</h5>' + obj.description + '<a href="' + obj.link + '" target="_blank "><button>View Live</button></a></span></div>';
}
