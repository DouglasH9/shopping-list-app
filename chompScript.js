$(document).ready(funciton() {
	$('#button').click(function() {
		console.log ('hello');
		var itemAdd = $('input[name=listItems]').val()
		$("#list").prepend('<div class="item">' + itemAdd + '</div>')

	});
});