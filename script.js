
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Page Navigation
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Handle Booking Form
        function handleBooking(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const location = document.getElementById('location').value;
            const guests = document.getElementById('guests').value;
            const date = document.getElementById('date').value;

            alert(`Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nGuests: ${guests}\nDate: ${date}\n\nWe'll contact you shortly!`);
            
            e.target.reset();
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
