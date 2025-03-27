var typed = new Typed(".text", {
    strings: ["Fullstack UI Developer with (React.JS) ","MERN stack Developer","FrontEnd with React.JS"],
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


         function toggleMenu() {
            document.getElementById("navbar").classList.toggle("active");
         }

         document.querySelector("form").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from reloading
        
            emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
        
            emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
                function () {
                    alert("Message sent successfully!");
                },
                function (error) {
                    alert("Failed to send message. Error: " + error.text);
                }
            );
        });
        
        function toggleMenu() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('active');
        }