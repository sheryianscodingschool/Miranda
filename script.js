const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#wrapper",{
    y:"100vh",
    scale:0.3,
    duration:0
})
tl.to("#wrapper",{
    y:"-101vh",
    duration:3,
    delay:0
})
tl.to("#wrapper",{
    y:"0vh",
    rotate:-720,
    scale:1,
    duration:1,
    delay:2
})
