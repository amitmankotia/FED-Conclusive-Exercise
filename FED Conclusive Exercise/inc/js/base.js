"use strict";

(function() {

	var Carousel = {
		props:{
			current_slide:null,
			total_slides: function(){
				var x = $("article");
				return x && x.length;
			}
		},
		init:function(){
			var x = $("article");
			this.props.current_slide = 1
			this.props.total_slides = x && x.length;
			this.bindEvents();
			//ADD INITIALIZER CODE HERE

		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},
		handleCurrentSlide : function () {
			var x = $("article");
			var slideProps = this.props;
			if (slideProps.current_slide > slideProps.total_slides) {slideProps.current_slide = 1}
			if (slideProps.current_slide  < 1) {slideProps.current_slide  = slideProps.total_slides}
		},
		next:function(){
			this.props.current_slide+=1;
			this.handleCurrentSlide();
			this.update();
			//ADD NEXT CODE HERE
		},
		previous:function(){
			this.props.current_slide-=1;
			this.handleCurrentSlide();
			this.update();
			//ADD PREVIOUS CODE HERE
		},
		update:function(){
			var i, currentSlide = this.props.current_slide;
			var x = $("article");
		  for (i = 0; i < x.length; i++) {
		     x[i].style.display = "none";
		  }
			x[currentSlide-1].style.display = "flex";
			//ADD UPDATE CODE HERE
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);
