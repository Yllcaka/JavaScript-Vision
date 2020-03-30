var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
$('.filtering button').on('click', function () {
    var value = $(this).attr("data-name");
    console.log(value);
    $grid.isotope({
        filter: value
    })
})