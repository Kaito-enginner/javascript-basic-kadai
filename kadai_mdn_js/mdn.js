// 今日の日時を生成
const today = new Date();

// 配列の宣言と今日の日時を使って代入を行う
const date = [today.getFullYear(),today.getMonth()+1,today.getDate()]

// 今日の日時を出力
console.log(date[0] + '年' + date[1] + '月' + date[2] +'日');