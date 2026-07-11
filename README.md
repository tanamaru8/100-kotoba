# 僕が教室長を辞めたくなった100の言葉

GitHub Pages（Jekyll）で運用しているサイトです。

## 新しい記事を1本追加する手順

1. `_posts/` の中の好きなファイル（例：`2026-07-03-003-nyukai-ritsu.md`）をコピーする
2. ファイル名を `年-月-日-連番3桁-半角ローマ字タイトル.md` の形にリネームする
   - 例：4本目なら `2026-07-04-004-example.md`
   - 日付は「番号が大きいほど新しい日付」になるように、必ず前の記事より後の日付にする（前後ナビの並び順に直結するため）
3. ファイル冒頭のfront matterを書き換える

```markdown
---
number: 4                          # 通し番号（1〜100）
permalink: /004/                   # 3桁ゼロ埋めでnumberと合わせる
title: "タイトルをここに"
date: 2026-07-04
excerpt: "一覧カードに出る1行紹介文をここに"
# image: /assets/images/posts/004.jpg   # 画像を用意したらコメントを外す
---

本文をここに書く。
```

4. 本文を書く（Markdown形式。見出しは `##`、改行は空行で段落分け）
5. 画像を使う場合は `assets/images/posts/` に `004.jpg` のような形で置き、front matterの `image` の行のコメントを外す（漫画の1コマ目ができたら、ここを差し替えるだけでOK）
6. 保存してGitHubにpushすれば、数十秒〜数分でサイトに自動反映されます

## AIに依頼するときのテンプレート例

> 「第4話として、こういう出来事のエピソードを書いて。number: 4, permalink: /004/, title, excerpt, 本文の形式で、上のREADMEのfront matter仕様に沿ったMarkdownファイルの中身だけ出力して」

とお願いすれば、そのままコピーして `_posts/` に保存するだけで反映できます。

## フォルダ構成

```
_config.yml          サイト全体の設定
_layouts/
  default.html        全ページ共通の外枠（ヘッダー・ナビ・フッター）
  post.html            記事詳細ページの型
_posts/                記事本体（1記事1ファイル）
assets/
  css/style.css        デザイン
  js/script.js         ハンバーガーメニューの挙動
  images/              画像（hero.jpg、記事ごとの画像はimages/posts/内）
index.html             トップページ（一覧はLiquidで自動生成）
```

## 反映されないときの確認先

pushしてもサイトが更新されない場合は、GitHubリポジトリの **Actions** タブでビルドが失敗していないか確認してください。front matterの `---` の書き忘れや、YAMLのインデント崩れが原因になることが多いです。
