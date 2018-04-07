$(document).ready(function(){
  $(".li").css("opacity", 0.8);
  $(".li").hover(function(){
    $(this).css("opacity",1);
  }, function(){
    $(this).css("opacity",0.8);
});

 $(".button").hover(function(){
   $(this).css({"color":"#563D7C","background-color":"#FFE484","opacity":1})
 },function () {
   $(this).css({"color":"#FFE484","background-color":"#563D7C","opacity":0.9})
 })

$(".menu-x").click(function(){
  if ($(".menu").is(":hidden")){
    $(".menu").show();
    $(".menu-x").css("opacity",1);
  } else {
    $(".menu").hide();
    $(".menu-x").css("opacity",0.7);
  }
})

$(".menu-y").click(function(){
  if ($(".menu-z").is(":hidden")){
    $(".menu-z").show();
    $(".menu-y").css("opacity",1);
  } else {
    $(".menu-z").hide();
    $(".menu-y").css("opacity",0.7);
  }
})

$(".bars-new").click(function(){
  if ($(".nav-down").is(":hidden")) {
    $(".nav-down").slideDown(300);
  } else {
    $(".nav-down").slideUp(300);
  }
})

$(".link div").hover(function(){
  $(this).css("color","#007BFF");
}, function(){
  $(this).css("color","#99979C");
});

$(".link div").hover(function(){
  $(this).css("color","#007BFF");
}, function(){
  $(this).css("color","#99979C");
});

$(".bars").click(function(){
  if ($(".items").is(":hidden")) {
    $(".items").slideDown(300);
  } else {
    $(".items").slideUp(300);
  }
});
});
