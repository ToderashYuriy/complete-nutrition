$(document).ready(function(){
    
	$('.border_tab .title_tab_product').on('click',function(){
		var that = $(this),
			type = that.parent().parent('.tab_product').data('type'),
			tab = $('.content_tab.'+ type +'_tab');
			console.log(tab);
			console.log(type);
		if(tab.hasClass('hidden')){
			tab.removeClass('hidden');
			tab.slideDown();
			that.find('svg.plus_tab').addClass('hidden');
			that.find('svg.minus_tab').removeClass('hidden')
		}else{
			tab.addClass('hidden');
			tab.slideUp();
			that.find('svg.minus_tab').addClass('hidden');
			that.find('svg.plus_tab').removeClass('hidden')
		}
	});
	setTimeout(function() {
		$('.content_block_product .spr-badge').on('click',function(){
			$('html, body').animate({
		      scrollTop: $("#shopify-product-reviews").offset().top
		    }, 1000);
		});
	}, 3000);
	$('a.quick_shop_btn').on('click',function(e){
		e.preventDefault();
		var that = $(this),
			href = that.attr('href'),
			quickParent = $('.quick-view-parent'),
			body = $('body'),
			quickImage = quickParent.find('.quick_image_content'),
			quickContent = quickParent.find('.quick_content_inner');

		$.get(href, function(data){
			var content_block = $(data).find('.content_block_product'),
				image_block = $(data).find('.product-single__photo__img')[1];
			quickImage.append(image_block);
			quickContent.append(content_block);
			quickParent.addClass('show');
			body.addClass('quick_shop');
			console.log(content_block);
			console.log(image_block);

		});
	});
	$('.quick-view-parent .quick_inner a.close_quick_btn.js-no-transition').on('click',function(e){
		e.preventDefault();
		var that = $(this),
			parent = that.parent().parent(),
			body = $('body'),
			image_block = that.parent().find('.quick_content').find('.quick_image_content'),
			content_block = that.parent().find('.quick_content').find('.quick_content_inner');
		body.removeClass('quick_shop');
		parent.removeClass('show');
		image_block.html('');
		content_block.html('');
	});
	$('.quick-view-parent .quick-view-overlay').on('click',function(){
		var that = $(this),
			parent = that.parent(),
			body = $('body'),
			image_block = that.parent().find('.quick_content').find('.quick_image_content'),
			content_block = that.parent().find('.quick_content').find('.quick_content_inner');
		body.removeClass('quick_shop');
		parent.removeClass('show');
		image_block.html('');
		content_block.html('');
	});
});

$('a.magnific_popup_items.product-single__photo-zoom.js-no-transition').each(function(i){
	var that = $(this),
		alt = that.data('alt');
	if(alt.indexOf('youtube') >= 0 ){
		that.addClass('video_product_zoom');
		that.attr('href', alt);
		$('.video_product_zoom').magnificPopup({
		  type: 'iframe',
		  iframe: {
		    markup: '<div class="mfp-iframe-scaler">'+
		              '<div class="mfp-close"></div>'+
		              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		            '</div>',
		    patterns: {
		      youtube: {
		        index: 'youtube.com/',
		        id: 'v=',
		        src: '//www.youtube.com/embed/%id%?autoplay=1'
		      }
		    },
		    srcAction: 'iframe_src',
		  }
		});
	}else{
		that.addClass('js-product-zoom');
		$(".js-product-zoom").magnificPopup({
		    type: "image",
		    image: {
		      verticalFit: false
		    },
		    gallery: {
		      enabled: true,
		      arrowMarkup:
		        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="icon icon--%dir% mfp-prevent-close"></i></button>'
		    },
		    mainClass: "product-single-zoom mfp-medium mfp-zoom-pic mfp-close-corner",
		    fixedContentPos: true,
		    removalDelay: 200,
		    closeOnContentClick: false,
		    autoFocusLast: false,
		    closeMarkup:
		      '<button title="Close (Esc)" type="button" class="mfp-close mfp-close--custom js-close-mfp"><i class="icon icon--close"></i></button>'
		});
	}
});








