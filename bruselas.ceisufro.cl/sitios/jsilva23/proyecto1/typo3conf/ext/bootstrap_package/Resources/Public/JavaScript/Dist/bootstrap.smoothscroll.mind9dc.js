!function(i){i('a[href*="#"]:not([href$="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&void 0===i(this).data("toggle")&&void 0===i(this).data("slide")){var o=i(this.hash);if((o=o.length&&o||i("[name="+this.hash.slice(1)+"]")).length){var t=o.offset().top,l=i(".navbar-fixed-top");return l.length&&0!==t&&(t-=l.outerHeight()),i("html,body").animate({scrollTop:t},500),!1}}}),i(".scroll-top").on("click",function(){i(this).blur()}),i(window).on("scroll",function(){300<i(this).scrollTop()?i(".scroll-top").addClass("scroll-top-visible"):i(".scroll-top").removeClass("scroll-top-visible")})}(jQuery);