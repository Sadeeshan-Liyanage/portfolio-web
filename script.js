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

    const cursor = document.getElementById('magic-cursor');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;


        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });


    document.querySelectorAll('a, button').forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        elem.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
};