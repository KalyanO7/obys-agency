function loadingAnimation() {

    let time = gsap.timeline();
    time.from(".line h1", {
        y: 150,
        stagger: 0.3,
        duration: 0.5,
        delay: 0.5,

    })

    time.from(".line1-part", {
        opacity: 0,
        onStart: function () {
            let h5 = document.querySelector(".line1-part h5");
            let counter = 0;
            setInterval(function () {
                if (counter < 100) {
                    h5.innerHTML = counter++;
                } else {
                    h5.innerHTML = counter
                }
            }, 25)
        }
    })

    time.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })

    time.to("#loader", {
        opacity: 0,
        duration: 0.5,
        delay: 2.2
    })

    time.from("#page1", {
        y: 1200,
        opacity: 0,
        delay: 0.2
    })
    time.to("#loader", {
        display: "none"
    })
}

loadingAnimation()

function cursorAnimation(){

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation();