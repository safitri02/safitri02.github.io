
$('.scroll').on('click', function(e) {
	// console.log('Masuk

	var tujuan = $(this).attr('href'); //ambil isi 

	var elTujuan = $(tujuan); //Tangkap Element

	$('body').animate({
		scrollTop: elTujuan.offset().top -50
	}, 1000, 'swing');

	e.preventDefault();

});



$(window).on('load', function(){
	$('.gambar').addClass('gambarMuncul')
	$('.h5').addClass('h5Muncul')
});

$(window).scroll(function() {

//Jumbotron
	var ws = $(this).scrollTop();

	// console.log(ws);
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ ws/4 +'%)'
	})

	// $('.jumbotron h1').css({
	// 	'transform' : 'translate(0px, '+ ws/2 +'%)'
	// })

	// $('.jumbotron p').css({
	// 	'transform' : 'translate(0px, '+ ws/2 +'%)'
	// })


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






