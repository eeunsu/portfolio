//fullpage
document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#wrap', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        responsiveWidth: 1280,
        navigationPosition: 'right'
    });
});

//heart
document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.getElementById('hearts_container');
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }

    setInterval(createHeart, 600);
});

//nav
document.getElementById('nav_home').addEventListener('click', function (e) {
    e.preventDefault();
    fullpage_api.moveTo(1);
});

document.getElementById('nav_about').addEventListener('click', function (e) {
    e.preventDefault();
    fullpage_api.moveTo(2);
});

document.getElementById('nav_publishing').addEventListener('click', function (e) {
    e.preventDefault();
    fullpage_api.moveTo(3);
});


/* pick */
$(function () {
    let tab = $('.pick_tap li')
    tab.on('click', function () {
        let idx = $(this).index()
        let tab_cont = $(this).parents('.pick_tap').siblings('.tab_content').eq(idx);
        $(this).addClass('on');
        $(this).siblings().removeClass('on')
        tab_cont.addClass('on')
        tab_cont.siblings().removeClass('on')
    })
})