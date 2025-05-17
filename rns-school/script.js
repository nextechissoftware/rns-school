document.addEventListener("DOMContentLoaded", function() {
    // Toggle Mobile Menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Parents Review Slider
    (function() {
        const testimonials = document.querySelectorAll(".testimonial");
        const nextTestimonialBtn = document.getElementById("nextBtn");
        const prevTestimonialBtn = document.getElementById("prevBtn");

        let testimonialIndex = 0;
        let testimonialInterval;

        function showTestimonial(index) {
            testimonials.forEach((el, i) => {
                el.classList.toggle("hidden", i !== index);
            });
        }

        function nextTestimonial() {
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            showTestimonial(testimonialIndex);
        }

        function prevTestimonial() {
            testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(testimonialIndex);
        }

        if (nextTestimonialBtn && prevTestimonialBtn) {
            nextTestimonialBtn.addEventListener("click", () => {
                nextTestimonial();
                resetTestimonialInterval();
            });

            prevTestimonialBtn.addEventListener("click", () => {
                prevTestimonial();
                resetTestimonialInterval();
            });
        }

        function resetTestimonialInterval() {
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(nextTestimonial, 4000);
        }

        if (testimonials.length > 0) {
            testimonialInterval = setInterval(nextTestimonial, 4000);
            showTestimonial(testimonialIndex);
        }
    })();


});