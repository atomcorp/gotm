jQuery(document).ready(function($) {
	var $monthContent = $('.month-content');
	var $month = $('.month');
	var $scorer = $('.scorer');
	$.each($monthContent, function(index, val) {
		$this = $(this);
		$this.find($month).text(data[index].month);
		$this.find($scorer).text(data[index].scorer);
	});

	$('.calender').on('click', function(event) {
		event.preventDefault();
		$(this).siblings('ul').toggleClass('hidden');
	});
});