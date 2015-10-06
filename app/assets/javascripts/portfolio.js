$(document).ready(function() {

   /* $('#mix').mixItUp();*/
    $('#mix').mixItUp({
        callbacks: {
            onMixLoad: function(state){
                $(".category-app").hide();
                $(".category-logo").hide();
                $(".category-brand").hide();
                $(".category-web").hide();
                $(".category-print").hide();
            }
        }
    });
});