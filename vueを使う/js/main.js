//コードをチェックしてくれる
'use strict';
//appとexample1は変数名
var app = new Vue({
  el: "#app",
  data: {
      message: "ログイン画面"
  }
});

var example1 = new Vue({
//elements の略である el
  el: '#click',
  data: {
    // ログインを押すとalertが表示される
    login: function() {
      alert("入力してくだい")
    }
    //帰ってきたやつを加工する
  }
});