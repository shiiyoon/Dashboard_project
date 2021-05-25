$(".menu-btn").click(function(){
    $(".left").animate({
        margin: 0
    })
})
$(".close-btn").click(function(){
    $(".left").animate({
        margin: "-100%"
    });
})
function go(url){
    setTimeout(function(){
        location.href = `${url}`
    },500)
}
$(function () {
    $('[data-toggle="popover"]').popover()
  })