$(".notification-num").html($(".notification[data-status='unread']").length);
$(".notification[data-status='unread']>.notification-desc-container>div:first-child>.notification-desc").append("<div class='not-period'></div>")

$(".notification[data-status='unread']").click(function(){
    if ($(this).find(".not-period").length > 0) {
        $(this).find(".not-period").remove();
    }
    $(this).attr('data-status', 'read');
    $(".notification-num").html($(".notification[data-status='unread']").length);
});


$('#mark-read').click(function() {
    $('.notification').attr('data-status', 'read');
    $(".notification-num").html($(".notification[data-status='unread']").length);
    $(".not-period").remove()
  });
