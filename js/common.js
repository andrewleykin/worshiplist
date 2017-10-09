// Функция js

$(function(){
	$('.js-button').click(function() {

		var display = $('.result'),
			displayGospel = $('.result-gospel'),
			displayWorship = $('.result-worship'),
			displayMore = $('.result-more'),
			item1 = $('.item--1'),
			item2 = $('.item--2'),
			item3 = $('.item--3'),
			child = $('.item').children();
			child1 = item1.children(),
			child2 = item2.children(),
			child3 = item3.children();

			child.removeClass('select');
			display.html(' ');

		for(i=0; i<=2; i++) {
			var index = randomInteger(0, child1.length - 1);
			var reqChild = child1.eq(index);
			if(reqChild.hasClass('select')) {
				i--;
				continue;
			} else {
				reqChild.addClass('select');
			}
			var html = reqChild.html();
			displayGospel.append('<span>' + html + '</span>');
		}

		for(i=0; i<=3; i++) {
			var index = randomInteger(0, child2.length - 1);
			var reqChild = child2.eq(index);
			if(reqChild.hasClass('select')) {
				i--;
				continue;
			} else {
				reqChild.addClass('select');
			}
			var html = reqChild.html();
			displayGospel.append('<span>' + html + '</span>');
		}

		for(i=0; i<=1; i++) {
			var index = randomInteger(0, child3.length - 1);
			var reqChild = child3.eq(index);
			if(reqChild.hasClass('select')) {
				i--;
				continue;
			} else {
				reqChild.addClass('select');
			}
			var html = reqChild.html();
			displayGospel.append('<span>' + html + '</span>');
		}

	});

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
});