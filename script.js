document.addEventListener('DOMContentLoaded', () => {
    const updateCountdowns = () => {
        const countdowns = document.querySelectorAll('.countdown');
        
        countdowns.forEach(container => {
            const dateStr = container.getAttribute('data-date');
            if (!dateStr) return;

            // Try to parse the date - handles both "Month Day, Year" and ISO formats
            const targetDate = new Date(dateStr).getTime();
            if (isNaN(targetDate)) return;

            const now = new Date().getTime();
            const distance = targetDate - now;

            const daysEl = container.querySelector('.days-val');
            const hoursEl = container.querySelector('.hours-val');
            const minutesEl = container.querySelector('.minutes-val');
            const secondsEl = container.querySelector('.seconds-val');

            if (distance < 0) {
                if (daysEl) daysEl.innerText = "00";
                if (hoursEl) hoursEl.innerText = "00";
                if (minutesEl) minutesEl.innerText = "00";
                if (secondsEl) secondsEl.innerText = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
        });
    };

    // Run immediately
    updateCountdowns();
    
    // Update every second
    setInterval(updateCountdowns, 1000);
});
