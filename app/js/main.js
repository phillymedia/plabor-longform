$(document).ready(function() {
    $('#recircSpecials').load('/philly/news/special_packages/390291181.html  #morereports');
    $("#base").sticky({
        topSpacing: 150
    });
    var distance1 = $('#mapHook-1').offset().top,
        distance2 = $('#mapHook-2').offset().top,
        distance3 = $('#mapHook-3').offset().top,
        $window = $(window);
    var path1 = document.querySelector('#highlight-1');
    var path2 = document.querySelector('#highlight-2');
    var path3 = document.querySelector('#highlight-3');
    var path4 = document.querySelector('#highlight-4');
    var path1Length = path1.getTotalLength();
    var path2Length = path2.getTotalLength();
    var path3Length = path3.getTotalLength();
    var path4Length = path4.getTotalLength();
    path1.style.strokeDasharray = path1Length + ' ' + path1Length;
    path1.style.strokeDashoffset = path1Length;
    path1.getBoundingClientRect();

    path2.style.strokeDasharray = path2Length + ' ' + path2Length;
    path2.style.strokeDashoffset = path2Length;
    path2.getBoundingClientRect();

    path3.style.strokeDasharray = path3Length + ' ' + path3Length;
    path3.style.strokeDashoffset = path3Length;
    path3.getBoundingClientRect();

    path4.style.strokeDasharray = path4Length + ' ' + path4Length;
    path4.style.strokeDashoffset = path4Length;
    path4.getBoundingClientRect();
    var step3 = false;
    var step4 = false;
    $window.scroll(function() {
        if ($window.scrollTop() >= distance1 - 200) {
            $("#highlight-1").animate({
                'stroke-dashoffset': 0,
            }, 3000, function() {
                $("#pinedale").css({
                    fill: "#f7941e",
                    transition: "0.2s"
                })
                $("#pinedale-text text").css({
                    fontWeight: "bold",
                    transition: "0.2s"
                })
            });

            $("#highlight-2").delay(3000).animate({
                'stroke-dashoffset': 0,
            }, 2000, function() {
                $("#tule").css({
                    fill: "#f7941e",
                    transition: "0.2s"
                })
                $("#tule-text text").css({
                    fontWeight: "bold",
                    transition: "0.2s"
                })
                step3 = !step3;
            });
        }
        if ($window.scrollTop() >= distance2 - 200 && step3 == true) {
            $("#highlight-3").animate({
                'stroke-dashoffset': 0,
            }, 2000, function() {
                $("#caldwell").css({
                    fill: "#f7941e",
                    transition: "0.2s"
                })
                $("#caldwell-text text").css({
                    fontWeight: "bold",
                    transition: "0.2s"
                })
                step4 = !step4;
            });
        }
        if ($window.scrollTop() >= distance3 - 200 && step4 == true) {
            $("#highlight-4").delay(2000).animate({
                'stroke-dashoffset': 0,
            }, 2000, function() {
                $("#auburn").css({
                    fill: "#f7941e",
                    transition: "0.2s"
                })
                $("#auburn-text text").css({
                    fontWeight: "bold",
                    transition: "0.2s"
                })
            });
        }
    });
});
