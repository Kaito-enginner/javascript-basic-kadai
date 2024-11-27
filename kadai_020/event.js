// btnというHTML要素を取得して定数に代入する
const btn = document.getElementById('btn');

// textというHTNLを取得して定数に代入する
const text = document.getElementById('text');

btn.addEventListener('click', () => {

    // #btnをクリックしたときにテキストの内容を表示する
    text.textContent = 'ボタンをクリックしました';
    
});