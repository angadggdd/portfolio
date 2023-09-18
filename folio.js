var typed = new Typed('.text', {
    strings: ['Frontend Developer, Web Developer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// scroll sections

let sections = document.querySelector('section');

window.onscroll = ()=>{
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);
}