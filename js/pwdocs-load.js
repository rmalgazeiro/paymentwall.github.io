$('.docs-code-tabs__tab').on('click', function(e) {
	e.preventDefault();

	var parentId = $(this).parent().parent().parent().attr('id');
	var lang = $(this).attr('lang');

	$('#' + parentId + ' .docs-code-tabs__tab').removeClass('is-active');
	$('#' + parentId + ' .docs-code-tabs__body').removeClass('is-active');
	$(this).addClass('is-active');
	$('#' + parentId + ' .js-lang-' + lang).addClass('is-active');
});

$(":header").each(function(){
	var text = $('<a class="anchor" id=' + $(this).attr('id') + '></a>');
	$(this).prepend(text);
	$(this).removeAttr('id');
});