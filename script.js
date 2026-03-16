const locomotiveJS = () => {
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}



const navAnimation = () => {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to(".second-nav", {
      height: "23vh",
      duration: 0.5,
    });
    tl.to(".nav-options h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-options h5 span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-options h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-options h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".second-nav", {
      height: 0,
      duration: 0.2,
    });
  });
};

const page2Animation = () => {
  const rightElement = document.querySelectorAll(".right-el");

  rightElement.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
  });

  rightElement.forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
  });

  rightElement.forEach((elem) => {
    elem.addEventListener("mousemove", (dets) => {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 10,
        y: dets.y - elem.getBoundingClientRect().y - 90,
      });
    });
  });
};

const page3VideoAnimation = () => {
  const page3Center = document.querySelector(".center-page3");
  const video = document.querySelector(".page3 video");

  page3Center.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });

  const page5Sec = document.querySelectorAll(".section-right");

  page5Sec.forEach((elem) => {
    const video = elem.querySelector("video");

    elem.addEventListener("mouseenter", () => {
      if (video) {
        video.muted = true; // for autoplay
        video.play();
        gsap.to(video, {
          opacity: 1,
          duration: 0.5,
        });
      }
    });

    elem.addEventListener("mouseleave", () => {
      if (video) {
        video.load();
        gsap.to(video, {
          opacity: 0,
          duration: 0.5,
        });
      }
    });
  });
};

const page7ScrollingAnimation = () => {
  gsap.from(".page7-products h5", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page7-products",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });

  gsap.from(".page7-uxDesign h5", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page7-uxDesign",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });

  gsap.from(".page7-uiDesign h5", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page7-products",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
};
 
locomotiveJS()
loadingAnimation()
navAnimation()
page2Animation()
page3VideoAnimation()
page7ScrollingAnimation()
