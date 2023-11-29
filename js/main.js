$(document).ready(function() {
    console.log('Loaded');

    $('.nav_btn').click(function() {
        let id = $(this)[0].id.split('_')[0];
        $('.active').removeClass('active');
        $(this).addClass('active');
        togglePage(id);
    })

    function togglePage(id) { 
        $('.page').removeClass('hidden').addClass('hidden');
        $(`#${id}`).removeClass('hidden');
    }
});