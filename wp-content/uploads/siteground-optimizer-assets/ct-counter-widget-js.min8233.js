(function(b){var a=function(a,b){setTimeout(function(){elementorFrontend.waypoint(a.find('.ct-counter-number-value'),function(){var c=b(this),a=c.data(),d=a.toValue.toString().match(/\.(.*)/);d&&(a.rounding=d[1].length),c.numerator(a)},{offset:'98%',triggerOnce:!0})},500)};b(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/ct_counter.default',a),elementorFrontend.hooks.addAction('frontend/element_ready/ct_banner.default',a)})})(jQuery)