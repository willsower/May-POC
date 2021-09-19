ScrollReveal().reveal('.toast');

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

animateValue("value1", 0, 3000);
animateValue("value2", 0, 3000);
animateValue("value3", 0, 3000);
animateValue("value4", 0, 3000);