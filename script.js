
var t1 = gsap.timeline();

t1.from("#logo", { 
    duration: 0.6, 
    y: -50, 
    opacity: 0, 
    delay: 0.3,
    stagger: 0.2 
});

t1.from(["#link1", "#link2", "#link3", "#link4"], { 
    duration: 0.6, 
    y: -50, 
    opacity: 0, 
    stagger: 0.2 
}, "-=0.5"); 

t1.from("#greeting", { 
    duration: 0.6, 
    x: -2000, 
    opacity: 0, 
    delay: 0.3, 
    stagger: 0.2
});

t1.from("#headline", { 
    duration: 0.6, 
    x: -2000, 
    opacity: 0, 
    stagger: 0.2
}, "-=0.5");

t1.from("#description", { 
    duration: 0.6, 
    x: -2000, 
    opacity: 0, 
    stagger: 0.2
}, "-=0.5");

t1.from("#ctaButton", { 
    duration: 0.6, 
    x: -2000, 
    opacity: 0, 
    stagger: 0.2
}, "-=0.5");
