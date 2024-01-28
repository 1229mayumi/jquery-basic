$(function () {
  // // id属性がfadeOutの要素がクリックされたら
  // $('#fadeOut').on('click', function(){
  //   // フェードアウトする
  //   $('.box').fadeOut();
  //   // $('.box').fadeOut(3000, function(){
  //   //   alert('fadeOut完了');
  //   // });
  // });

  // // id属性がfadeToggleの要素がクリックされたら
  // $('#fadeToggle').on('click', function(){
  //   // フェードインorフェードアウトする
  //   $('.box').fadeToggle();
  // });

  // $('#slideUp').on('click', function(){
  //   $('.box').slideUp();
  // });
  // $('#slideDown').on('click', function(){
  //   $('.box').slideDown();
  // });
  // $('#slideToggle').on('click', function(){
  //   $('.box').slideToggle();
  // });
  $('#fadeOut').on('click', function(){
    //不透明度を0にする（フェードアウトする）
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function(){
    //不透明度を1にする（フェードインする）
    $('.box').css('opacity', 1);
  });
  $('#slideUp').on('click', function(){
    //高さを0にする（スライドアップする）
    $('.box').css('height', 0);
  });
  $('#slideDown').on('click', function(){
    //高さを200にする（スライドアップする）
    $('.box').css('height', 200);
  });
  $('#slideToggle').on('click', function(){
    $('.box').slideToggle();
  });
});