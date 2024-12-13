( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCTCounterHandler = function( $scope, $ ) {
        setTimeout(function(){
            elementorFrontend.waypoint($scope.find('.ct-counter-number-value'), function () {
                var $number = $(this),
                    data = $number.data();

                var decimalDigits = data.toValue.toString().match(/\.(.*)/);

                if (decimalDigits) {
                    data.rounding = decimalDigits[1].length;
                }

                $number.numerator(data);
            }, {
                offset: '98%',
                triggerOnce: true
            });
        }, 500);
    };

    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_counter.default', WidgetCTCounterHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/ct_banner.default', WidgetCTCounterHandler );
    } );
} )( jQuery );