$(document).ready(function() {
	
	var check = 
	
	$('#button').click(function() {
		console.log ('hello');
		var itemAdd = $('input[name=listItems]').val()
		$("#goods").prepend('<li class="item">' + itemAdd + '</li>')

	});

	$('#listInput').keypress(function(event){
		if(event.which == 13) {
			console.log ("enter was pressed");
			var itemAdd = $('input[name=listItems]').val()
			$('#goods').prepend('<li class="item"><div class="ecks"></div>' + itemAdd + '<div class="check"></div></li>')
		};
	});

	$('.ecks').click(function(){
		$(this).remove('.item')
	});
});