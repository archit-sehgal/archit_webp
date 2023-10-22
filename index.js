function init() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init();

var cursor = document.querySelector("#cursor");
var main = document.querySelector(".main");

document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX + 10,
        y: dets.clientY + 10,
        duration: .5,
        ease: Expo
    })
});

const lerp = (x, y, a) => x * (1 - a) + y * a;

var asidebtn = document.querySelector(".aside_call_btn");
var asidei = document.querySelector(".aside_call_btn i");
asidebtn.addEventListener("mousemove", function (dets) {
    var dims = asidebtn.getBoundingClientRect();
    var xstart = dims.x;
    var xend = xstart + dims.width;

    var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


    var dimsy = asidebtn.getBoundingClientRect();
    var ystart = dimsy.y;
    var yend = ystart + dimsy.height;

    var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

    gsap.to(this, {
        x: lerp(-100, 100, zeroOne),
        y: lerp(-100, 100, zerotwo),
        duration: .3,
        ease: Expo
    })
})
asidebtn.addEventListener("mouseleave", function (dets) {
    gsap.to(this, {
        x: 0,
        y: 0,
        duration: .3,
        ease: Expo
    })
})
asidebtn.addEventListener("click", () => {
    asidei.classList.toggle("fa-xmark");
    document.querySelector(".aside-nav").classList.toggle("aside-nav-toggle")
})

// courses section

var singlcourse = document.querySelectorAll(".single-up a img");
singlcourse.forEach((course) => {

    course.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            mixBlendMode: "normal",
            width: "150px",
            height: "150px",
            duration: 0.5
        });
        gsap.to(cursor, {
            x: dets.clientX + 10,
            y: dets.clientY + 10,
            duration: .5,
            ease: Expo
        });
        cursor.textContent = "view"
        cursor.style.width = "100px";
        cursor.style.display = "flex";
        cursor.style.alignItems = "center";
        cursor.style.justifyContent = "center";
        cursor.style.backgroundColor = "rgb(13,13,13)"
        cursor.style.fontSize = "1rem";
        cursor.style.fontWeight = "800";
    });



    course.addEventListener("mouseleave", (dets) => {
        gsap.to(cursor, {
            width: "20px",
            height: "20px",
            mixBlendMode: "difference",
            duration: 0.5
        });
        gsap.to(cursor, {
            x: dets.clientX ,
            y: dets.clientY ,
            duration: .5,
            ease: Expo
        });
        cursor.textContent = "";
        cursor.style.width = "30px";
        cursor.style.backgroundColor = "whitesmoke";
        cursor.style.borderRadius = "50%";
        cursor.style.textAlign = "none";
        cursor.style.fontSize = "0";
        cursor.style.fontWeight = "0";
    });
});

// conatctme
var sociallinks = document.querySelectorAll(".sociallinks a");
sociallinks.forEach((link) => {
    link.addEventListener("mousemove", (dets) => {
        var dims = link.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


        var dimsy = link.getBoundingClientRect();
        var ystart = dimsy.y;
        var yend = ystart + dimsy.height;

        var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

        gsap.to(link, {
            x: lerp(-30, 30, zeroOne),
            y: lerp(-30, 30, zerotwo),
            duration: .3,
            ease: Expo
        });
        gsap.to(cursor,{
            scale:3
        })
    })
    link.addEventListener("mouseleave", () => {

        gsap.to(link, {
            x: 0,
            y: 0,
            duration: .3,
            ease: Expo
        })
        gsap.to(cursor,{
            scale:1
        })
    })
})

// conatctme
var skills = document.querySelectorAll(".skillsbox span");
skills.forEach((link) => {
    link.addEventListener("mousemove", (dets) => {
        var dims = link.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


        var dimsy = link.getBoundingClientRect();
        var ystart = dimsy.y;
        var yend = ystart + dimsy.height;

        var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

        gsap.to(link, {
            x: lerp(-20, 20, zeroOne),
            y: lerp(-20, 20, zerotwo),
            duration: .3,
            ease: Expo
        });
        gsap.to(cursor,{
            scale:2
        })
    })
    link.addEventListener("mouseleave", () => {

        gsap.to(link, {
            x: 0,
            y: 0,
            duration: .3,
            ease: Expo
        })
        gsap.to(cursor,{
            scale:1
        })
    })
})