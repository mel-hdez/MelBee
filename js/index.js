jQuery(function() {
    const deadline = "02/24/2022 23:59"; /// 09:00h +6h for Mex
    console.log(deadline);
    
    /// Init countdown to finish tomorrow
    $('.counter ul').countdown({
        date: deadline,
        days: $('.days_text').text(),
        hours: $('.hours_text').text(),
        minutes: $('.minutes_text').text()
    },function () {
        console.log('Countdown Finished!');
    });

    /// Init counter circles
    var circlesUpdater = setInterval(function(){
        $('.time-container').each(function( i ) {
            var total = $(this).attr("total");
            var current = $(this).find('.numbers').text();

            $('.progressbar',this).css({
                'background-image':'linear-gradient('+ (0) +'deg, #113982 0%, #247c80 '+ (100 - current/total*100 - 4) +'%, transparent '+ (100 - current/total*100 + 4) +'%, transparent 100%)',
                'opacity':'1'
            });
        });
    }, 2000);

    setTimeout(function(){
        clearInterval(circlesUpdater);
    }, 20000);
});