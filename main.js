/* File: js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';
        });
    }

    // 2. Menu Filtering (Only runs on Menu page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => {
                    b.classList.remove('btn-solid');
                    b.classList.add('btn');
                });
                // Add active class to clicked
                btn.classList.remove('btn');
                btn.classList.add('btn-solid');

                const filter = btn.getAttribute('data-filter');

                menuItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    const diet = item.getAttribute('data-diet');

                    // Animation reset
                    item.style.opacity = '0';
                    
                    setTimeout(() => {
                        if (filter === 'all' || category === filter || diet === filter) {
                            item.style.display = 'flex';
                            setTimeout(() => item.style.opacity = '1', 50);
                        } else {
                            item.style.display = 'none';
                        }
                    }, 200);
                });
            });
        });
    }

    // 3. Reservation Form Handler
    const form = document.getElementById('reservation-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = "Processing...";
            btn.style.opacity = "0.7";

            // Simulate network request
            setTimeout(() => {
                alert("Request Received! We will confirm your table via WhatsApp shortly.");
                form.reset();
                btn.innerText = originalText;
                btn.style.opacity = "1";
            }, 1500);
        });
    }
});
// Defensive fallback: ensure header nav links work
document.addEventListener('click', function(e){
  const a = e.target.closest && e.target.closest('.nav-links a');
  if (a && a.getAttribute('href')) {
    // allow normal behavior for normal clicks
    return;
  }
}, { passive: true });

// Optional: explicit click handlers (uncomment if needed)
// document.querySelectorAll('.nav-links a').forEach(a => {
//   a.addEventListener('click', (ev) => {
//     ev.preventDefault(); // only if default isn't working
//     window.location.href = a.href;
//   });
// });
