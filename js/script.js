// menu splitting
$(function (){
    Splitting();
})

// header scroll
$(function (){
    var prevScrollTop = 0;
    document.addEventListener("scroll", function (){
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    });
});

// animate scroll
$(function (){
    $(".animate").scrolla({
        mobile: true,
        once: false,
    });
});

// section pinning with ScrollTrigger
$(function (){
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
});

// background animation with ScrollTrigger
$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const frameCount = 21;
    const offsetValue = 100;

    gsap.to('.stage', {
        backgroundPosition: `${-offsetValue * frameCount * 2}px center`,
        ease: `steps(${frameCount})`,
        scrollTrigger: {
            trigger: '.character',
            start: 'top top',
            end: `+=${frameCount * offsetValue}`,
            pin: true,
            scrub: true,
            markers: true
        }
    });
});
