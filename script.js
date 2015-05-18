
// $(document).ready(function() {
$(window).load(function() {

  $(".pinned").pin({containerSelector: ".pin-container", minWidth: 940});

  $("#movies li").waypoint(function(direction){
  	if (direction === 'down') {
	  	$('[data-movie-text=' + $(this.element).data("movie") + ']').removeClass("hidden");
	  	$(this.element).addClass("full-opacity");
	  	$(this.element).siblings().removeClass("full-opacity");
	  	$('[data-movie-text=' + $(this.element).data("movie") + ']').siblings().addClass("hidden");
  	}
  }, {offset: '500'});

  $("#movies li").waypoint(function(direction){
  	if (direction === 'up') {
	  	$('[data-movie-text=' + $(this.element).data("movie") + ']').removeClass("hidden");
	  	$(this.element).addClass("full-opacity");
	  	$(this.element).siblings().removeClass("full-opacity");
	  	$('[data-movie-text=' + $(this.element).data("movie") + ']').siblings().addClass("hidden");
  	}
  });

});