const progress = document.querySelector('.progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; // kind of index

next.addEventListener('click', () => {
    currentActive++

    //so that it doesn't go further than 4
    if(currentActive > circles.length) { 
        currentActive = circles.length;
    }

    update()

})

prev.addEventListener('click', () => {
    currentActive--

    //so that it doesn't go under 1
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
    
})

// update the DOM

function update() {

    // circles are a node list (array): iterate through them
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    // set the width of the progress line in percent
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // grey buttons out (disable them) or show them as active
    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}