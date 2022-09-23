$("document").ready(function () {
    // Hewan Unggas
    $("#ayam").click(function () {
        $("#ayam-img").attr({
            'src': "img/ayam.jpg"
        });
        $('#ayamtoast.toast').toast('show');
        $("#ayam-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#ayam-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-unggas/ayam.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#bebek").click(function () {
        $("#bebek-img").css({
            'background-size': "auto",
            'background-color': "red"
        })
        $("#bebek-img").attr({
            'src': "img/bebek.jpg"
        });
        $('#bebektoast.toast').toast('show');
        $("#bebek-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#bebek-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-unggas/bebek.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#burung").click(function () {
        $("#burung-img").attr({
            'src': "img/burung.jpg"
        });
        $('#burungtoast.toast').toast('show');
        $("#burung-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#burung-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-unggas/burung.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#angsa").click(function () {
        $("#angsa-img").attr({
            'src': "img/angsa.jpg"
        });
        $('#angsatoast.toast').toast('show');
        $("#angsa-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold",
        })
        $("#angsa-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-unggas/angsa.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })


    // Hewan Ternak
    $("#kuda").click(function () {
        $("#kuda-img").attr({
            'src': "img/kuda.jpg"
        });
        $('#kudatoast.toast').toast('show');
        $("#kuda-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#kuda-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-ternak/kuda.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#sapi").click(function () {
        $("#sapi-img").attr({
            'src': "img/sapi.jpg"
        });
        $('#sapitoast.toast').toast('show');
        $("#sapi-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#sapi-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-ternak/sapi.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#kambing").click(function () {
        $("#kambing-img").attr({
            'src': "img/kambing.jpg"
        });
        $('#kambingtoast.toast').toast('show');
        $("#kambing-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#kambing-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-ternak/kambing.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    // $("#kelinci").click(function () {
    //     $("#kelinci-img").attr({
    //         'src': "img/kelinci.jpg"
    //     });
    //     $('#kelincitoast.toast').toast('show');
    //     $("#kelinci-text").css({
    //         'top': "80%", 
    // s'font-size': "20px",
    //      '-webkit-text-stroke': "1px black",
    // 'font-weight': "bold"
    //     })
    //     $("#kelinci-subtext").hide();
    //     $("<audio></audio>").attr({
    //         'src': "audio/hewan-ternak/kelinci.mp3",
    //         'volume': 0.2,
    //         'autoplay': "autoplay"
    //     }).appendTo("body");
    // })
    $("#babi").click(function () {
        $("#babi-img").attr({
            'src': "img/babi.jpg"
        });
        $('#babitoast.toast').toast('show');
        $("#babi-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#babi-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-ternak/babi.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })


    // Hewan Buas
    $("#harimau").click(function () {
        $("#harimau-img").attr({
            'src': "img/harimau.jpg"
        });
        $('#harimautoast.toast').toast('show');
        $("#harimau-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#harimau-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-buas/harimau.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#singa").click(function () {
        $("#singa-img").attr({
            'src': "img/singa.jpg"
        });
        $('#singatoast.toast').toast('show');
        $("#singa-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#singa-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-buas/singa.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#macan").click(function () {
        $("#macan-img").attr({
            'src': "img/macan.jpg"
        });
        $('#macantoast.toast').toast('show');
        $("#macan-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#macan-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-buas/macan.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#beruang").click(function () {
        $("#beruang-img").attr({
            'src': "img/beruang.jpg"
        });
        $('#beruangtoast.toast').toast('show');
        $("#beruang-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#beruang-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-buas/beruang.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
    $("#buaya").click(function () {
        $("#buaya-img").attr({
            'src': "img/buaya.jpg"
        });
        $('#buayatoast.toast').toast('show');
        $("#buaya-text").css({
            'top': "80%",
            'font-size': "20px",
            '-webkit-text-stroke': "1px black",
            'font-weight': "bold"
        })
        $("#buaya-subtext").hide();
        $("<audio></audio>").attr({
            'src': "audio/hewan-buas/buaya.mp3",
            'volume': 0.2,
            'autoplay': "autoplay"
        }).appendTo("body");
    })
});