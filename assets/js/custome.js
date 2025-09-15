gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.Service_content');

console.log(horizontalSection.scrollWidth);

gsap.to('.Service_content', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
        trigger: '.Service_content',
        start: 'center center',
        end: '+=2000px',
        pin: '.main',
        scrub: true,
        invalidateOnRefresh: true
    }
});


// gsap.registerPlugin(ScrollTrigger);

// const icons = document.querySelectorAll(".icon");
// const sections = document.querySelectorAll("section");

// sections.forEach((section, i) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => setActive(i),
//         onEnterBack: () => setActive(i),
//     });
// });

// function setActive(index) {
//     icons.forEach((icon, i) => {
//         icon.classList.toggle("active", i === index);
//     });
//     document.querySelectorAll(".skills-content").forEach((content, i) => {
//         content.classList.toggle("active", i === index);
//     });
// }


gsap.registerPlugin(ScrollTrigger);

const icons = document.querySelectorAll(".icon");
const sections = document.querySelectorAll("section");
// const wheel = document.querySelector(".skills_icon_rotate");

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActive(i),
    onEnterBack: () => setActive(i),
  });
});

function setActive(index) {
  icons.forEach((icon, i) => {
    icon.classList.toggle("active", i === index);
  });
  document.querySelectorAll(".skills-content").forEach((content, i) => {
    content.classList.toggle("active", i === index);
  });

}













var timeManagement = gsap.timeline()

    timeManagement.from(".menu li", {
        y: -100,
        opacity: 0,
        stagger: .1,
        duration: .5,
    })
    
    gsap.from(".mane-text div",{
        y: -100,
        opacity: 0,
        stagger: .3,
        duration: .5,
    })


    var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

