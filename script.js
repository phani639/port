var typed = new Typed(".text", {
    strings: ["UI Fullstack Developer","Web Developer","UI/UX Designer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

window.addEventListener('scroll', () =>
     { const skillsSection = document.getElementById('skills');
         const skills = document.querySelectorAll('.skill-fill'); 
         if (window.scrollY + window.innerHeight >= skillsSection.offsetTop)
             { skills.forEach(skill => { skill.style.width = skill.getAttribute('data-skill'); }); } });