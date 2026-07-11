// ==============================
// ハンバーガーメニュー
// ==============================

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// メニュー開閉
hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// メニューをクリックしたら閉じる
const links = menu.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});