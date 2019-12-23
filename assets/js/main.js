const nameInputEl = document.getElementById("name-input");
const emailInputEl = document.getElementById("email-input");
const messageInputEl = document.getElementById("message-input");
const sendBtnEl = document.getElementById("send-btn");

const clearContactForm = () => {
    nameInputEl.value = "";
    emailInputEl.value = "";
    messageInputEl.value = "";
}

sendBtnEl.addEventListener("click", clearContactForm);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Scroll to top when home is clicked
$("#home-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".home-content").offset().top
    },
        'slow');
});

// Button to scroll to my work on landing
$("#my-work-button").click(function () {
    $('html,body').animate({
        scrollTop: $(".portfolio-container").offset().top -185
    },
        'slow');
});

// Scroll to about section when about is clicked
$("#about-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".about-me-container").offset().top -185
    },
        'slow');
});

// Scroll to portfolio section when portfolio is clicked
$("#portfolio-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".portfolio-container").offset().top -185
    },
        'slow');
});

// Scroll to contact section when contact is clicked
$("#contact-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".contact-container").offset().top -185
    },
        'slow');
});

// Make navbar fixed at certain page height
$(window).scroll(function () {
    if ($(window).scrollTop() > 969) {
        $('.navbar').addClass('fixed');
    }
    if ($(window).scrollTop() < 300) {
        $('.navbar').removeClass('fixed');
    }
});