document.addEventListener("DOMContentLoaded", function () {

    console.log("NEXT Store siap digunakan!");

    const cards = document.querySelectorAll(
        ".card, .diamond-card, .benefit"
    );

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(function () {

            card.style.transition = "0.5s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 80);

    });

});