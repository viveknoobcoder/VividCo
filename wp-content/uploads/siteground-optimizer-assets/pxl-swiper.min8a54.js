(function(a){"use strict";a(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/pxl_post_carousel.default',function(a){b(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_testimonial_carousel.default',function(a){b(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_team_carousel.default',function(a){b(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_partner_carousel.default',function(a){b(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_image_carousel.default',function(a){b(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_solutions_carousel.default',function(a){b(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_client_carousel.default',function(a){b(a)})});function b(b){b.find('.pxl-swiper-slider').each(function(i,j){var c=a(this),b,d,e,g,h,k;let f=c.find('.pxl-item--fraction-active').first();b=c.find(".pxl-swiper-container").data().settings,d={direction:b.slide_direction,effect:b.slide_mode,wrapperClass:'pxl-swiper-wrapper',slideClass:'pxl-swiper-slide',slidesPerView:b.slides_to_show,slidesPerGroup:b.slides_to_scroll,slidesPerColumn:b.slide_percolumn,spaceBetween:0,observer:!0,observeParents:!0,navigation:{nextEl:c.find('.pxl-swiper-arrow-next')[0],prevEl:c.find('.pxl-swiper-arrow-prev')[0]},pagination:{type:b.pagination_type,el:c.find('.pxl-swiper-dots')[0],clickable:!0,modifierClass:'pxl-swiper-pagination-',bulletClass:'pxl-swiper-pagination-bullet',renderCustom:function(c,d,a,b){return a+' of '+b},renderBullet:function(b,a){return'<span class="'+a+'"><span></span></span>'}},speed:b.speed,watchSlidesProgress:!0,watchSlidesVisibility:!0,breakpoints:{0:{slidesPerView:b.slides_to_show_xs,slidesPerGroup:b.slides_to_scroll},576:{slidesPerView:b.slides_to_show_sm,slidesPerGroup:b.slides_to_scroll},768:{slidesPerView:b.slides_to_show_md,slidesPerGroup:b.slides_to_scroll},992:{slidesPerView:b.slides_to_show_lg,slidesPerGroup:b.slides_to_scroll},1200:{slidesPerView:b.slides_to_show,slidesPerGroup:b.slides_to_scroll},1400:{slidesPerView:b.slides_to_show_xxl,slidesPerGroup:b.slides_to_scroll}},on:{init:function(b){var d=this.activeIndex;let c=b.realIndex+1;f.length&&a(f).text(c)},slideChangeTransitionStart:function(c){var b=this.activeIndex;a(this.slides).each(function(c){c==b?a(this).find('.wow').removeClass('pxl-invisible').addClass('animated'):a(this).find('.wow').removeClass('animated').addClass('pxl-invisible')})},slideChange:function(b){var c=this.activeIndex;a(this.slides).each(function(b){b==c?a(this).find('.wow').removeClass('pxl-invisible').addClass('animated'):a(this).find('.wow').removeClass('animated').addClass('pxl-invisible')});let d=b.realIndex+1;f.length&&a(f).text(d)},sliderMove:function(c){var b=this.activeIndex;a(this.slides).each(function(c){c==b?a(this).find('.wow').removeClass('pxl-invisible').addClass('animated'):a(this).find('.wow').removeClass('animated').addClass('pxl-invisible')})}}},(b.center_slide||b.center_slide=='true')&&(d.centeredSlides=!0),(b.loop||b.loop==='true')&&(d.loop=!0),b.autoplay||b.autoplay==='true'?d.autoplay={delay:b.delay,disableOnInteraction:b.pause_on_interaction}:d.autoplay=!1,b['creative-effect']==='effect1'&&(d.creativeEffect={prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}),b['creative-effect']==='effect2'&&(d.creativeEffect={prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}}),b['creative-effect']==='effect3'&&(d.creativeEffect={prev:{opacity:0},next:{opacity:0}}),c.find('.pxl-swiper-thumbs').length>0&&(e=c.find('.pxl-swiper-thumbs').data().settings,g={effect:e.slide_mode,direction:e.slide_direction,spaceBetween:0,slidesPerView:e.slides_to_show,centeredSlides:!1,loop:e.loop,watchSlidesProgress:!0,slideToClickedSlide:!0},h=new Swiper(c.find('.pxl-swiper-thumbs')[0],g),d.thumbs={swiper:h}),k=new Swiper(c.find(".pxl-swiper-container")[0],d),b.autoplay==='true'&&b.pause_on_hover==='true'&&a(c.find('.pxl-swiper-container')).on({mouseenter:function(){this.swiper.autoplay.stop()},mouseleave:function(){this.swiper.autoplay.start()}}),a('.pxl-navigation-carousel').parents('.elementor-section').addClass('pxl--hide-arrow'),setTimeout(function(){a('.pxl-navigation-carousel .pxl-navigation-arrow-prev').on('click',function(){a(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-prev').trigger('click')}),a('.pxl-navigation-carousel .pxl-navigation-arrow-next').on('click',function(){a(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-next').trigger('click')})},300)})}})(jQuery)