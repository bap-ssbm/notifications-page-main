


$(".notification-num").html($(".notification[data-status='unread']").length);
$(".notification[data-status='unread']>.notification-desc-container>div:first-child>.notification-desc").append("<div class='not-period'></div>")

$(".notification[data-status='unread']").click(function(){
    $(this).attr('data-status', 'read');
    $(".notification-num").html($(".notification[data-status='unread']").length);
    $(".not-period").remove()
});

$('#mark-read').click(function() {
    $('.notification').attr('data-status', 'read');
    $(".notification-num").html($(".notification[data-status='unread']").length);
    $(".not-period").remove()
  });