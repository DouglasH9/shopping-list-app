$(document).ready(function() {
	
	
	$('#button').click(function() {
		console.log ('hello');
		var itemAdd = $('input[name=listItems]').val()
		$("#list").prepend('<div class="item">' + itemAdd + '</div>')

	});

	$('#listInput').keypress(function(event){
		if(event.which == 13) {
			console.log ("enter was pressed");
			var itemAdd = $('input[name=listItems]').val()
			$('#list').prepend('<div class="item">' + itemAdd + '</div>')
		};


	});
});