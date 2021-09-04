const toggle = document.querySelector(".toggle__theme");
const card = document.querySelector(".app");
toggle.addEventListener("click", () => {
    let theme = toggle.querySelector(".fa");
    if (theme.classList.contains("fa-moon-o")) {
        theme.classList.remove("fa-moon-o");
        theme.classList.add("fa-sun-o");
        card.classList.add("dark");
    } else {

        theme.classList.remove("fa-sun-o");
        theme.classList.add("fa-moon-o");
        card.classList.remove("dark");
    }
})

