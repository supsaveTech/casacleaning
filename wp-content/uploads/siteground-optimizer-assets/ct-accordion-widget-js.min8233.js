(function(a){var b=function(b,a){b.find(".ct-accordion .ct-accordion-item .ct-ac-title").on("click",function(e){var b,c,d;e.preventDefault(),b=a(this).data("target"),c=a(this).parents(".ct-accordion"),d=c.find(".ct-ac-title.active"),a.each(d,function(e,c){var d=a(c).data("target");d!=b&&(a(c).removeClass("active"),a(this).parent().removeClass("active"),a(d).slideUp(400))}),a(this).parent().toggleClass("active"),a(this).toggleClass("active"),a(b).slideToggle(400)})};a(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/ct_accordion.default',b)})})(jQuery)