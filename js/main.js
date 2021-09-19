ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.nav');

ScrollReveal().reveal('.may_img', {delay: 100});
ScrollReveal().reveal('.may_about', {delay: 100});

ScrollReveal().reveal('.places_worked');
ScrollReveal().reveal('.places_worked1', {delay: 100});
ScrollReveal().reveal('.places_worked2', {delay: 200});
ScrollReveal().reveal('.places_worked3', {delay: 300});
ScrollReveal().reveal('.places_worked4', {delay: 400});
ScrollReveal().reveal('.places_worked5', {delay: 500});

ScrollReveal().reveal('.my_stats');
ScrollReveal().reveal('.my_stats1', {delay: 100});
ScrollReveal().reveal('.my_stats2', {delay: 200});
ScrollReveal().reveal('.my_stats3', {delay: 300});
ScrollReveal().reveal('.my_stats4', {delay: 400});

ScrollReveal().reveal('.work_with_me');
ScrollReveal().reveal('.email', {delay: 100});
ScrollReveal().reveal('.phone', {delay: 100});
ScrollReveal().reveal('.linkedin', {delay: 100});
ScrollReveal().reveal('.instagram', {delay: 100});
ScrollReveal().reveal('.my_form', {delay: 100});

// Number Counter

function animateValue(id, start, duration) {
    if (start === end) return;
    var obj = document.getElementById(id);
    var end = obj.innerHTML;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));

    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value1", 0, 5000);
animateValue("value2", 0, 5000);
animateValue("value3", 0, 5000);
animateValue("value4", 0, 5000);