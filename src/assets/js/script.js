
// Dyanamique Date Year Footer -- Copyright


jQuery(function () {

    // Copyright

    $("#copyright").text(" © جميع الحقوق محفوظة - النجومية الرقمية | 2020 - " + new Date().getFullYear());

    // Scroll hash 

    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html,body').animate({ scrollTop: $(hash).offset().top }, 800, function () { })
    });

});

