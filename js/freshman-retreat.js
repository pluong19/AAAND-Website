

/* Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
// Select all links with hashes
$('a[href*="#"]')

// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      navBarHeight = document.getElementById("navBarScrollID").clientHeight
      scrollHeight = target.offset().top-navBarHeight-67 // Adjust '67' when the animation does not bring it right up to the header.
      $('html, body').animate({
        scrollTop: scrollHeight
      });
    }
  }
});
