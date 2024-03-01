gsap.registerPlugin(ScrollTrigger);

    // NAV

ScrollTrigger.create({
    trigger: "#about",
    toggleClass: {
        targets: "#navbarTogglerDemo02",
        className: "togglerNav",
    }
})
