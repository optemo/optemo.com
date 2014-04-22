var minWidthWithoutStacking = 753;
var minWidthWithoutAdjust = 965;

var resizeTimer;
var columnTimer;
var spacingTimer;

$(window).resize(function() {
    clearTimeout(resizeTimer);
    clearTimeout(columnTimer);
    clearTimeout(spacingTimer);
    resizeTimer = setTimeout(equalizeBoxHeights, 25);
    columnTimer = setTimeout(adjustColumns, 25);
    spacingTimer = setTimeout(adjustSpacing, 25);
});

$(window).load(function() {
  equalizeBoxHeights();
  adjustColumns();
  adjustSpacing();
  $('.dropdown-toggle').mouseout( function() {
    if ($(this).parent().hasClass('open')) {
      $(this).dropdown('toggle');
    }
  });
});

equalizeBoxHeights = function() {
  width = $(window).width();
  $('#customers').children().first().css({'min-height': 0});
  $('#featured-stories').children().first().css({'min-height': 0});
  
  if (width >= minWidthWithoutStacking) {
    storiesHeight = $('#featured-stories').children().first().height();
    moreStoriesHeight = $('#more-stories').children().first().height();
    totalStoriesHeight = storiesHeight + moreStoriesHeight;

    customersHeight = $('#customers').children().first().height();
    
    var subtraction;
    if (typeof $.browser.msie === 'undefined') {
      // Browser isn't IE
      subtraction = 41;
    }
    else {
      // Browser is IE
      subtraction = 35;
    }
    if (totalStoriesHeight > customersHeight) { $('#customers').children().first().css({'min-height': totalStoriesHeight - subtraction}); }
    if (customersHeight > totalStoriesHeight) { $('#featured-stories').children().first().css({'min-height': customersHeight - moreStoriesHeight + subtraction}); }
  }
};

adjustColumns = function() {
  width = $(window).width();
  if (width < minWidthWithoutStacking) {
    // About Optemo colums
    $($('.columns')[0]).css('-moz-column-count', '1');
    $($('.columns')[0]).css('-webkit-column-count', '1');
    $($('.columns')[0]).css('column-count', '1');
    
    // History colums
    $($('.columns')[1]).css('-moz-column-count', '1');
    $($('.columns')[1]).css('-webkit-column-count', '1');
    $($('.columns')[1]).css('column-count', '1');
  }
  else if (width < minWidthWithoutAdjust) {
    // About Optemo colums
    $($('.columns')[0]).css('-moz-column-count', '2');
    $($('.columns')[0]).css('-webkit-column-count', '2');
    $($('.columns')[0]).css('column-count', '2');
    
    // History colums
    $($('.columns')[1]).css('-moz-column-count', '2');
    $($('.columns')[1]).css('-webkit-column-count', '2');
    $($('.columns')[1]).css('column-count', '2');
  }
  else {
    // About Optemo colums
    $($('.columns')[0]).css('-moz-column-count', '2');
    $($('.columns')[0]).css('-webkit-column-count', '2');
    $($('.columns')[0]).css('column-count', '2');
    
    // History colums
    $($('.columns')[1]).css('-moz-column-count', '3');
    $($('.columns')[1]).css('-webkit-column-count', '3');
    $($('.columns')[1]).css('column-count', '3');
  }
};

adjustSpacing = function() {
  width = $(window).width();
  if (width < minWidthWithoutStacking) {
    $('.benefits-caption').css('margin-top', '0px');
  }
  else if (width < minWidthWithoutAdjust){
    $('.benefits-caption').css('margin-top', '35px');
  }
  else {
    $('.benefits-caption').css('margin-top', '135px');
  }
}