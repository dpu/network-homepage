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
