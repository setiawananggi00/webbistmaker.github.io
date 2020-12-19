// event pada link
$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    // ambil section 
    var elemenTujuan = $(tujuan);


    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 60
    });
    e.preventDefault();
});
