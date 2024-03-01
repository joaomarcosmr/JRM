gsap.registerPlugin(ScrollTrigger);

// NAVBAR SECTION
// TopBar

ScrollTrigger.create({
    trigger: "#about",
    toggleClass: {
        targets: "#navbarTop",
        className: "navbarTop-active",
    }
})

//BottomBar

ScrollTrigger.create({
    trigger: "#about",
    toggleClass: {
        targets: "#navbarBottom", 
        className: "navbarBottom-active",
    }
})
