!function(a){var i=function(t){this.$container=a(t),this.$elements=this.$container.find("[data-equalheight=item]"),this.init()};function e(){return this.each(function(){var t=a(this),e=t.data("bk2k.equalheight");e?e.process():t.data("bk2k.equalheight",e=new i(this))})}i.prototype.init=function(){this.process()},i.prototype.reset=function(){this.$elements.height("auto")},i.prototype.process=function(){this.reset();var e=[],i=null,n=null,h=0;this.$elements.each(function(){var t=a(this);t.is(":hidden")||(h=t.offset().top,i!==h?(e.length=0,i=h,n=t.outerHeight(),e.push(t)):(e.push(t),n=n<t.outerHeight()?t.outerHeight():n),n=Math.ceil(n),a.each(e,function(){var t=a(this).outerHeight()-a(this).height();a(this).height(n-t)}))})};var t=a.fn.equalheight;a.fn.equalheight=e,a.fn.equalheight.Constructor=i,a.fn.equalheight.noConflict=function(){return a.fn.carousel=t,this},a(window).on("load resize calculate.bk2k.equalheight",function(){a("[data-equalheight=container]").each(function(){var t=a(this);e.call(t,t.data())})}),a("img").on("load",function(){a(window).trigger("calculate.bk2k.equalheight")})}(jQuery);