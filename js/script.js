// ハンバーガーメニュー nav-menu

$(".menu").click(function () {
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
		$(".menu__logo").toggleClass('logoactive');
});

$(".g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".menu").removeClass('active');//ボタンの activeクラスを除去し
    $(".g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
		$(".menu__logo").removeClass('logoactive');
});


// 動きのきっかけとなるアニメーションの名前を定義
function slideAnime(){

  // ふわっ
  $('.slideInTriggerLeft').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('slideInLeft');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('slideInLeft');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
  $('.slideInTriggerRight').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('slideInRight');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('slideInRight');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
  $('.fadeIn').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述