//コードをチェックしてくれる
'use strict';
//appとexample1は変数名
var app = new Vue({
  el: "#app",
  data: {
      message: "ログイン画面"
  }
});

//現状：APIを実装する前に、
//入力された値をアラートで表示させようとしている←now

//APIの実装方法としては、入力されたIDとパスワードを取得する。
//取得した情報を利用してログインメソッドを呼び出して、APIを叩き、
// レスポンスで返ってきた、認証に必要な情報をlocalStorageに保存


// var userId= document.getElementById("userId").value;
// var password = document.getElementById("password").value;

var example2 = new Vue ({
  el: '#login',
  // data: function(){
  //   return {
  //     userId: '',
  //     password: ''
  //   }
  // },
  data (){
    return {
      userId: '',
      password: '',
    }
  },

  methods: {
    login: function(){
      auth.login(this.userId, this.password);
    }
  }
});

var auth = {
  login: function (id, pass){
    window.alert("userId:" + id + "\n" + "password:" + pass);
  }
};