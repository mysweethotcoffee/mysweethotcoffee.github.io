gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top 180px top",
        end: "-=180px",
        scrub: 1.5
    }
});

timeln.addLabel('card1');
timeln.to('.card-1',{
    yPercent: 0,
    opacity: 1
});

timeln.from(".card-2", {
    yPercent: 0,
    opacity: 0.7
});
timeln.addLabel("card2");

timeln.to(".card-1",{
    scale:1,
    opacity: 1
}, "=0");

timeln.to(".card-2", {
    yPercent: 170,
    opacity: 1
});

timeln.from('.card-3',{
    yPercent: 0,
    opacity: 0.5
});
timeln.addLabel("card3");

timeln.to(".card-2", {
    scale: 1,
    yPercent: 170,
    opacity: 1
}, "=0");

timeln.to(".card-3", {
    yPercent: 400,
    opacity: 1
});