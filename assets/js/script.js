// ==============================
// ハンバーガーメニュー
// ==============================

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
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
}

// ==============================
// トップページ：ランダム5本表示
// ==============================

function renderWordsCard(item) {
    const a = document.createElement("a");
    a.href = item.url;
    a.className = "card";

    a.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="card-image">
        <div class="card-body">
            <p class="card-number">第${item.number}話</p>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
        </div>
    `;

    return a;
}

function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

const wordsDataEl = document.getElementById("words-data");
const wordsGrid = document.getElementById("words-grid");
const wordsEmpty = document.getElementById("words-empty");

if (wordsDataEl && wordsGrid) {
    try {
        const allItems = JSON.parse(wordsDataEl.textContent);

        if (allItems.length === 0) {
            if (wordsEmpty) wordsEmpty.style.display = "block";
        } else {
            if (wordsEmpty) wordsEmpty.style.display = "none";

            const picked = shuffle(allItems).slice(0, 5);
            picked.forEach(item => {
                wordsGrid.appendChild(renderWordsCard(item));
            });
        }
    } catch (e) {
        console.error("100の言葉データの読み込みに失敗しました", e);
        if (wordsEmpty) wordsEmpty.style.display = "block";
    }
}

// ==============================
// 一覧ページ：タグで絞り込み
// ==============================

const tagButtons = document.querySelectorAll(".tag-filter-btn");
const archiveCards = document.querySelectorAll(".archive-grid .card");

if (tagButtons.length > 0 && archiveCards.length > 0) {
    tagButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tag = btn.dataset.tag;

            tagButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            archiveCards.forEach(card => {
                const cardTags = (card.dataset.tags || "").split(",");
                const show = tag === "all" || cardTags.includes(tag);
                card.style.display = show ? "" : "none";
            });
        });
    });
}
