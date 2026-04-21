window.onload = () => {

    if(document.querySelector(".typing-text")) {
        new Typed(".typing-text", {
            strings: ["UI/UX Designer", "Software Engineer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }


    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.header .navbar a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    let targetLink = document.querySelector('.header .navbar a[href*=' + id + ']');
                    if(targetLink) targetLink.classList.add('active');
                });
            }
        });


        reveal();
    };


    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            var windowHeight = window.innerHeight;
            var elementTop = el.getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    }



    reveal();





// ------------------------------------
// Elements දෙක variable වලට ගැනීම
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

// මවුස් එක move වන විට ක්‍රියාත්මක වන function එක
window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // elements දෙක පවතිනවාදැයි පරීක්ෂා කිරීම (Safety check)
    if (dot && outline) {
        // Dot එක මවුස් එක මැදට ගැනීම
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Outline එක පොඩි delay එකක් සහිතව එන්න transform පාවිච්චි කිරීම
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

};