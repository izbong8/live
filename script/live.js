 // 한국어
 var koreanFont = new FontFace('Noto Sans CJK KR', 'url(https://cdn.jsdelivr.net/npm/noto-sans-cjk-kr@latest/fonts/NotoSansCJKkr-Regular.otf)');
 koreanFont.load().then(function(loadedFont) {
   document.fonts.add(loadedFont);
   document.body.style.fontFamily = "'Noto Sans CJK KR', sans-serif";
 });
 
 
    function opennav(){
         document.getElementById("mynav").style.width = "100%";
     }
     function closenav(){
         document.getElementById("mynav").style.width = "0%";
     }

$(function(){
    $(".mainbtn").on("click",function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click",function(){
        $("#popup").fadeOut();
    });
});