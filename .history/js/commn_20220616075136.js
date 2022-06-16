window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 769) {
  } else {
    $("header .drawer").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle(200);
    });
    $("header li a").click(function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle(200);
    });
  }
}); 
/最初の部分でwidth/heightを取得するためのコードを記述しています。

そして、$(function () 以下で、if文を使用した条件分岐を記述し、width（デバイスの横幅）が769pxより大きければJavaScriptは適用されず、width（デバイスの横幅）が768px以下の場合（else）に記述したプログラムを発火させるといった記述をしています。

  そして、else内のプログラムに関しては「headerのdrawerをクリックされたら、body内に”nav - open“という新たなクラスを追加し、headerのheader_navを表示させるよ！」というような内容を記述しています。/ 