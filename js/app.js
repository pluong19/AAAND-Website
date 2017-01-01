// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

/*var a=document.getElementsByTagName("a");
for(var i=0;i<a.length;i++)
{
    a[i].onclick=function()
    {
        window.location=this.getAttribute("href");
        return false
    }
}*/

//sticky footer

$(window).bind("load", function () {
    var footer = $("footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});

//easter eggs

var secret = "3838404037393739666513"; //konami
var mario = "776582737913"; //mario
var sonic = "837978736713"; //sonic
var link = "7673787513"; //link
var objection = "79667469678473797813"; //objection
var irish = "738273837213"; //irish
var transistor = "82696813"; //transistor:red
var input = "";
var timer;
var mode = false;

$(document).keydown(function(e) {
    //alert(e.which);
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 1000);
    
    check_input();

    if (e.which == 13) {
        input = "";
    };
});

function check_input() {
    if(input == secret) {
        //Secret Konami Code
        $('img').attr({
            src: 'img/eastereggs/guile.gif'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };

        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/guile.ogg');
        addSource(audio, 'assets/guille.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
    else if(input == mario) {
        //Secret Mario Code
        $('img').attr({
            src: 'img/eastereggs/mario-optimized.png'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };

        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/mario.ogg');
        addSource(audio, 'assets/mario.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
    else if(input == sonic) {
        //Secret Sonic Code
        $('img').attr({
            src: 'img/eastereggs/sonic-optimized.png'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };
        
        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/sonic.ogg');
        addSource(audio, 'assets/sonic.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
    else if (input == link) {
        //Secret Link Code
        $('img').attr({
            src: 'img/eastereggs/link-optimized.png'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };

        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/link.ogg');
        addSource(audio, 'assets/link.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
    else if (input == objection) {
        //Secret Phoenix Wright Code
        $('img').attr({
            src: 'img/eastereggs/wright-optimized.png'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };

        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/wright.ogg');
        addSource(audio, 'assets/wright.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
    else if (input == irish) {
        //Secret Irish Code
        $('img').attr({
            src:'img/eastereggs/irish.png'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };

        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/irish.ogg');
        addSource(audio, 'assets/irish.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
    else if (input == transistor) {
        //Secret Transistor code
        $('img').attr({
            src:'img/eastereggs/transistor.jpg'
        });

        if ( $('#stop').length == 0 ) {
            $('.nav').prepend('<li><a id="stop">Stop Music</a></li>');
        };

        if ($('audio').length > 0) {
            $('audio').remove();
        };
        var audio = $('<audio />', {
          autoPlay: 'autoplay'
        });

        addSource(audio, 'assets/transistor.ogg');
        addSource(audio, 'assets/transistor.mp3');

        audio.appendTo('body');

        return false;

        function addSource(elem, path) {
            $('<source />').attr('src', path).appendTo(elem);
        }
    }
}