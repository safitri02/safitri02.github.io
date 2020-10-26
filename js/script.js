
$(window).scroll(function() {

//Jumbotron
	var ws = $(this).scrollTop();

	// console.log(ws);

//porfolio
if (ws > $('.portfolio').offset().top -200) {
	// console.log('Masuk');
	$('.portfolio .thumbnail').each(function(i){
		setTimeout(function () {
			// console.log('Masuk')
				$('.portfolio .thumbnail').eq(i).addClass('muncul')

		}, 300 * (i+1) )
	})

}






});