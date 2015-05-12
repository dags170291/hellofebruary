$(function () {
    $('.menu').find('a').on('click', closeNav);
});
function closeNav() {
    jQuery("#toggle-nav").attr('checked', false);
}
