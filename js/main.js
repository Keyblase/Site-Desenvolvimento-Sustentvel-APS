// BARRA PRETA SCROLL
$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
});






// ANCORA SUAVE 
$('nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});



$('.button a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 800);
});




// Scroll animado Ativo

$('section').each(function(){
    var height = $(this).height(),
        offsetTop = $(this).offset().top,
        menuHeight = $('.menu').innerHeight(),
        id = $(this).attr('id'),
        $itemMenu = $('a[href="#' + id + '"]');
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
            $itemMenu.addClass('active');
        }else {
            $itemMenu.removeClass('active');
        }
    });
});



// VOLTAR AO TOPO
$('.logo').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
    }, 500)
});









// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};