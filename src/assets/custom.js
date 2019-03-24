$(document).ready(function(){
	$('body .ajaxcart__products .ajaxcart__qty-adjust').on('click',function(){
		$('.inner_shipping_price_popup').css('opacity',0);
		console.log('nice');
	    setTimeout(function(){
	      var full_price_html_1 = $('.inner_shipping_price_popup .cart_free_shipping span.number_shipping').data('price'),
	          full_price_1 = parseInt(full_price_html_1),
	          price_html_1 = $('p.cart__footer-total span.money').html().replace('$',''),
	          price_1 = parseInt(price_html_1),
	          price_inner_1 = full_price_1 - price_1;
	      if (price_1 > full_price_1){
	        $('.inner_shipping_price_popup p.cart_free_shipping').addClass('hidden');
	        $('.inner_shipping_price_popup .cart_full_shipping').removeClass('hidden');
	      }else{
	        $('.inner_shipping_price_popup p.cart_free_shipping span.number_shipping').html(price_inner_1);
	        $('.inner_shipping_price_popup .cart_full_shipping').addClass('hidden');
	        $('.inner_shipping_price_popup p.cart_free_shipping').removeClass('hidden');
	      }
	      $('.inner_shipping_price_popup').css('opacity',1);
	    },2000);
    });


	$('a.open_burger_partner').on('click',function(e){
		e.preventDefault();
		$('.hidden_parent_partners').toggle( "slide" );
	});

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
	setTimeout(function() {
		$('button.snize-button.snize-action-button.snize-view-product-button').on('click',function(e){
			var that = $(this),
				href_product = that.parent().parent().parent('a.snize-view-link').attr('href'),
				href = href_product+'?view=quick_view',
				quickParent = $('.quick-view-parent'),
				body = $('body');
			$.get(href, function(data){
				var content = quickParent.find('.quick_content');
				quickParent.addClass('show');
				body.addClass('quick_shop');
				content.append(data);
				setTimeout(function () {
					theme.productSelect('2','product-single__variant-select',true, productObj ? productObj : null);
					SPR.initDomEls();
					SPR.loadBadges();
				});
			});
			return false;
		});
	}, 1000);
	$('a.quick_shop_btn').on('click',function(e){
		var that = $(this),
			href_product = that.attr('href'),
			href = href_product+'?view=quick_view',
			quickParent = $('.quick-view-parent'),
			body = $('body');
		console.log(href_product);
		$.get(href, function(data){
			var content = quickParent.find('.quick_content');
			quickParent.addClass('show');
			body.addClass('quick_shop');
			content.append(data);
			setTimeout(function () {
				theme.productSelect('2','product-single__variant-select',true, productObj ? productObj : null);
				SPR.initDomEls();
				SPR.loadBadges();
			});
		});
		return false;
	});
	$('.quick-view-parent .quick_inner a.close_quick_btn.js-no-transition').on('click',function(e){
		e.preventDefault();
		var that = $(this),
			parent = that.parent().parent(),
			body = $('body'),
			quickParent = $('.quick-view-parent'),
			content = quickParent.find('.quick_content');
		body.removeClass('quick_shop');
		parent.removeClass('show');
		content.html('');
	});
	$('.quick-view-parent .quick-view-overlay').on('click',function(){
		var that = $(this),
			parent = that.parent(),
			body = $('body'),
			quickParent = $('.quick-view-parent'),
			content = quickParent.find('.quick_content');
		body.removeClass('quick_shop');
		parent.removeClass('show');
		content.html('');
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


$(window).on('load',function(){
	$('.js-qty__adjust').on('click',function(){
        setTimeout(function(){
            $('button.c-btn.c-btn--light.cart__button-update.update-cart').click();
        },500);
    });
    $('input.js-qty__num').on('change',function(){
    	setTimeout(function(){
            $('button.c-btn.c-btn--light.cart__button-update.update-cart').click();
        },500);
    });
});



