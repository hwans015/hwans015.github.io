$(function () {

	var slide_count; 


	$('.main_carousel').flickity({
	  // options
	on: {
    ready: function() {
      console.log('Flickity is ready');
    },
    change: function( index ) {
      // console.log( 'Slide changed to' + index );
      slide_count = index;
      console.log(slide_count);
    }},

	  cellAlign: 'left',
	  contain: true,
	  wrapAround: true,
	});

	$('.second_carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  wrapAround: true,
	});


	$('.third_carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  wrapAround: true,
	});



});