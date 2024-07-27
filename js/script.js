$(document).on('click', 'a[href="#"]',
    function (e) {
        e.preventDefault();
    })

// menu splitting
$(function () {
    Splitting();
})

// header scroll
$(function () {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop();

        if (nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    });
});

// animate scroll
$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false,
    });
});

// section pinning with ScrollTrigger
$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            // markers: true
        });
    });

    ScrollTrigger.create({
        snap: 1 / (sections.length - 1)
    });

    ScrollTrigger.create({
        trigger: "#project",
        start: "top top",
        pin: true,
        pinSpacing: true,
        // markers: true
    });
});


$(function () {
    gsap.registerPlugin(ScrollTrigger);

    let activeImg;

    gsap.utils.toArray('.portfolio ul li a').forEach((elem) => {
        let image = elem.querySelector('img.fadeImg');

        const align = (e) => {
            gsap.to(image, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "elastic"
            });
        }

        const startPoint = () => document.addEventListener('mousemove', align);
        const stopPoint = () => document.removeEventListener('mousemove', align);

        const fade = gsap.to(image, {autoAlpha: 0.8, ease: 'none', paused: true});

        elem.addEventListener('mouseenter', (e) => {
            fade.play();
            startPoint();

            if (activeImg) {
                gsap.set(image, {
                    x: gsap.getProperty(activeImg, "x"),
                    y: gsap.getProperty(activeImg, "y"),
                });
            }
            activeImg = image;

            align(e);
        });

        elem.addEventListener('mouseleave', () => {
            fade.reverse();
            stopPoint();
        });
    });
});

// menu open

$(function (){
    $('.menuOpen').on('click', function (){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('body').toggleClass('on');
    })
})
