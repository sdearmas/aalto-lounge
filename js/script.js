// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  $(".nav-list").draggable();

  for (var i=1; i <= 3; i++) {
  	var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
  	var y = Math.max(0, Math.min(70, Math.ceil(Math.random() * 100)));
    var d = Math.floor(Math.random() * Math.floor (180));
  	$('.nav-list').css({
  		top: y + '%',
  		left: x + '%',
      transform: 'rotate(' + d + 'deg)'
  	});

    console.log(d)  }

    $(".nav-list-menu").draggable();

    for (var i=1; i <= 3; i++) {
    	var x = Math.max(0, Math.min(65, Math.ceil(Math.random() * 100)));
    	var y = Math.max(0, Math.min(250, Math.ceil(Math.random() * 100)));
      var d = Math.floor(Math.random() * Math.floor (180));
    	$('.nav-list-menu').css({
    		top: y + '%',
    		left: x + '%',
        transform: 'rotate(' + d + 'deg)'
    	});

      console.log(d)  }







// End of Your Code . Don't delete that line below!!
});
