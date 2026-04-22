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





// ------------------------------------cursor----------------------------------------//

    const cursor = document.getElementById('magic-cursor');
    const container = document.getElementById('particles-container');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function createTrail(x, y) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';


        dot.style.left = x + 'px';
        dot.style.top = y + 'px';

        container.appendChild(dot);

        setTimeout(() => {
            dot.style.transform = 'scale(0)';
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 500);
        }, 50);
    }

    function animate() {

        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.transform = `translate(${cursorX - 15}px, ${cursorY - 15}px)`;


        if (Math.abs(mouseX - cursorX) > 0.1) {
            createTrail(cursorX, cursorY);
        }

        requestAnimationFrame(animate);
    }
    animate();


    document.querySelectorAll('a, button').forEach(elem => {
        elem.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        elem.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });


};