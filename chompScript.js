$(document).ready(function() {
	
	var xMark = '<span class="xMark"></span>'
	var checkMark = '<span class="checkMark"></span>'

//animates pacman
	$('#pacman').mouseenter(function() {
		$('#pacman').animate({'width':'12%'},200);
		
	});

//adds item	on button click
	$('#button').click(function() {
		console.log ('hello');
		var itemAdd = $('input[name=listItems]').val()

		if (itemAdd == '') {
				alert('Add an item ya dum dum!');
		}
		else {
			$("#goods").prepend('<li class="item">' + xMark + itemAdd + checkMark + '</li>')
			$('#listInput').val('')
		}
	});
//adds item on enter
	$('#listInput').keypress(function(event){
		if(event.which == 13) {
			console.log ("enter was pressed");
			var itemAdd = $('input[name=listItems]').val()

			if (itemAdd == '') {
				alert('Add an item ya dum dum!');
			}
				else {

					$('#goods').prepend('<li class="item">' + xMark + itemAdd + checkMark + '</li>')
					$('#listInput').val('')
				}
		};
	});
//checks off or unchecks list items
	$(document).on('click' , '.xMark', function(){
		$(this).closest('li').fadeOut('fast')
	});

	$(document).on('click' , '.checkMark', function(){
		if ($(this).closest('li').hasClass('item')) {
			$(this).closest('li').addClass('crossOut');
			$(this).closest('li').removeClass('item');
		}

			else if ($(this).closest('li').hasClass('crossOut')) {
				$(this).closest('li').removeClass('crossOut');
				$(this).closest('li').addClass('item');
			}

		
	});


});