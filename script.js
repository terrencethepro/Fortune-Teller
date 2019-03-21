

var a;

$(".btn1").click(function(){
   a = $(".condition").val(); 
    console.log(a);
  $(".conditionVal").html(a);
});

var c;
var f;
$(".btn3").click(function(){
   c = $(".noun1").val(); 
   f=parseInt(c);
    console.log(f);
  $(".noun1Val").html(c);
});

var d;

$(".btn4").click(function(){
   d = $(".badSit").val(); 
    console.log(d);
  $(".badSitVal").html(d);
});