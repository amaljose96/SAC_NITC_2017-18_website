$(document).ready(function(){
  load_news();
  $(".modal-trigger").click(function(){
    open_complaint();
  });
  $("#complaint_submit").click(function(){
    submit_complaint();
    close_complaint();
  })
})


news=[
        {
            title:"No class on 28th September.",
            time:"20th September, 2017",
            content:"There would be no class on 28th September 2017."
        }
];
function htmlify_news(detail){
  var html="<li>";
    html+="<div class='collapsible-header teal white-text'>"+detail.title+"</div>";
    html+="<div class='collapsible-body'><div class='news_time'>"+detail.time+"</div><span>"+detail.content+"</span></div>";
    html+="</li>";
    return html;
}
function load_news(){
      $.getJSON("js/news.json",function(news){
        console.log(news);
        var html="<ul class='collapsible' data-collapsible='accordion'>";
        news.forEach(function(detail){
          html+=htmlify_news(detail);
        });
        html+="</ul>";
        $("#news_content").html(html);
        $('.collapsible').collapsible({
              accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
      });

}
function open_complaint(){
  $("#complaint").fadeIn();
}
function close_complaint(){
  $("#complaint").fadeOut();
}
function submit_complaint(){

}
