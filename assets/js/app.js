$(window).scroll(function(){ 
    if ($(window).scrollTop() > 0){ 
         $("#header").addClass('chageheader'); 
         $('.line-graph').each(function (i) {
          i = i + 1;
          $(this).addClass('line-chart-' + i);
        })
    }else{
       $("#header").removeClass('chageheader');
    }  
});
$(function() {
   console.log('%c%s', 'font-size:48px;color:#42a9f4;', 'Welcome to TAsec');
   console.log("\u54a6\uff01\u8fd9\u4e48\u5de7\u4f60\u4e5f\u559c\u6b22\u7814\u7a76\u0057\u0045\u0042\u6280\u672f\uff01\u005c\u0072\u005c\u006e\u53c8\u8fd9\u4e48\u5de7\u6211\u4eec\u6025\u9700\u50cf\u4f60\u8fd9\u6837\u7684\u4e13\u4e1a\u0057\u0045\u0042\u4eba\u58eb\u0021\u005c\u0072\u005c\u006e\u6765\u0054\u0041\u0053\u0045\u0043\u5427\uff0c\u548c\u6211\u4eec\u4e00\u8d77\u6539\u53d8\u0054\u0041\u0053\u0045\u0043\uff01\u6539\u53d8\u4e91\u5b89\u5168\uff01\u521b\u9020\u4e0b\u4e00\u4ee3\u4e91\u5b89\u5168\u4e4b\u5854\uff01");
   console.log("\u005c\u0072\u8bf7\u5c06\u7b80\u5386\u53d1\u9001\u81f3\u0020\u0025\u0063\u0020\u0077\u0065\u0062\u0040\u0073\u0061\u0066\u0065\u0064\u006f\u0067\u002e\u006e\u0065\u0074\uff08\u0020\u90ae\u4ef6\u6807\u9898\u8bf7\u4ee5\u201c\u59d3\u540d\u002d\u5e94\u8058\u0058\u0058\u804c\u4f4d\u002d\u6765\u81ea\u0063\u006f\u006e\u0073\u006f\u006c\u0065\u002d\u0046\u0045\u002f\u0053\u0045\u0052\u0056\u0045\u0052\u201d\u547d\u540d\uff09）","color:red");
   console.log("%c \u0043\u006f\u0070\u0079\u0072\u0069\u0067\u0068\u0074 © \u0032\u0030\u0030\u0038\u002d\u0032\u0030\u0031\u0038\u0020\u0053\u0061\u0066\u0065\u0064\u006f\u0067\u002e\u006e\u0065\u0074\u0020\u002f\u0020\u0054\u0041\u0053\u0045\u0043\u0020\u004c\u0069\u006d\u0069\u0074\u0065\u0064\u002c\u0020\u0041\u006c\u006c\u0020\u0052\u0069\u0067\u0068\u0074\u0073\u0020\u0052\u0065\u0073\u0065\u0072\u0076\u0065\u0064","color:blue;");
   $.get("/html/header.php",function(data,status){
      var headerdata = data;
      $("#header").html(headerdata);
    });
    $.get("/html/footer.php",function(data,status){
      var footerdata = data;
      $("#footer").html(footerdata);
    });
    //logos animation
    var ind = $("#indus>li");
    var tx = $("#a_fraud .in_tx");
    ind.on("mouseenter", function() {
      var _this = $(this);
      var i_index = _this.attr("data-index");
      tx.eq(i_index).css("background-position-y", "-78px");
    });
    ind.on("mouseleave", function() {
      var _this = $(this);
      var i_index = _this.attr("data-index");
      tx.eq(i_index).css("background-position-y", "10px");
    });
});
