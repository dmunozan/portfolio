$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

// Closes the menu after selecting any section
$(document).on("click", function(){
	$("#myNavbar").collapse('hide');
});

/* Takes out vertical align for better performing
 * and adds smaller to decrease font size in
 * small screens
 */
(function($) {
    var $window = $(window),
		$vertAlignResp = $('.vertAlign-resp');
		$paragraph = $('p');
		$icons = $('.fa');

    function resize() {
        if ($window.width() < 750) {
			$icons.removeClass('fa-2x');
			$icons.addClass('fa-lg');
			$paragraph.addClass('smaller');
			return $vertAlignResp.removeClass('vertical-align');
        }

		$icons.removeClass('fa-lg');
		$icons.addClass('fa-2x');
		$paragraph.removeClass('smaller');
		$vertAlignResp.addClass('vertical-align');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);
