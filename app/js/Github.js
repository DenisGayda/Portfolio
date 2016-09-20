

(function( $, undefined ) {

	var totWidth = 0;
	var positions = new Array();

	$('#slides .slide').each(function(i) {
		positions[i] = totWidth;
		totWidth += Math.ceil($(this).width());
		console.log(i)
	});

	$('#slides').width(totWidth);

	$('#menu ul li a').click(function(e){
		e.preventDefault();
		console.log(positions)
		$('li.menuItem').removeClass('act').addClass('inact');
		$(this).parent().addClass('act')

		var pos = $(this).parent().prevAll('.menuItem').length;
		console.log(pos)
		$('#slides').stop().animate({marginLeft: -positions[pos]+'px'},450);

		
	});

	$('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');


})( jQuery );