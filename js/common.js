// Функция js

$(function(){
	$('.js-button').click(function() {

		var display = $('.result'),
			item = $('.item'),
			startChild = $('.item').children(),
            checkbox = $('.checkbox'),
            counter = 0;

			startChild.removeClass('select');
			display.html(' ');

      
      
      
      for(i=0;i<=checkbox.length-1;i++) {
        var reqCheck = checkbox.eq(i);
            classCheck = reqCheck.data('name');
        if(!(reqCheck.is(':checked'))) {
          item.find('.' + classCheck).addClass('noChange');
        }
      }
      
      for(i=0;i<=checkbox.length-1;i++) {
        var reqCheck = checkbox.eq(i);
            classCheck = reqCheck.data('name');
        if(reqCheck.is(':checked')) {
          item.find('.' + classCheck).removeClass('noChange');
        }
      }
      
      counter = $('.no-opacity').length;
      
      
		for(v=0; v<=item.length-(1 + counter); v++) {
            var child = item.eq(v).children();
            switch(v) {
              case 0: 
                randomChild(3, child);
                break;
              case 1: 
                randomChild(1, child);
                break;
              case 2: 
                randomChild(4, child);
                break;
              default:
                randomChild(2, child);
            }
		}

	});

    $('.checkbox-click').click(function(){
      var item = $('.item'),
          checkClass = $(this).data('name');
      
      if($(this).hasClass('active')) {
        item.closest('.' + checkClass).addClass('no-opacity');
        $(this).removeClass('active');
      } else {
        item.closest('.' + checkClass).removeClass('no-opacity');
        $(this).addClass('active');
      }
      
    });
  
    function randomChild(count, child) {
      var counter,html
      for(i=0; i<=count; i++) {
        
        var index = randomInteger(0, child.length - 1),
            reqChild = child.eq(index);
              
        
        if(reqChild.hasClass('select') || reqChild.hasClass('noChange')) {
          i--;
          continue;
        } else {
            reqChild.addClass('select');
        }
        
        html = reqChild.html();
        
        if (i == 0) {
           $('.result').append('<span class="subtitle">Блок</span><span>' + html + '</span>');
        } else {
           $('.result').append('<span>' + html + '</span>');
        }
        
      }
    }
  
	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
});