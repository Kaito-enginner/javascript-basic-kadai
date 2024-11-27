// textというHTML要素を取得して定数に代入する
const btn = document.getElementById('btn');

// textというHTML要素を取得して定数に代入する
const text = document.getElementById('text');

// ボタンをクリックしたときに処理を実行する
btn.addEventListener('click', () => {

    // ボタンをクリックしてから2秒後にテキストを出力する
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
      }, 2000);

});