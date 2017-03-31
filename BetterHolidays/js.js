$(function() {
    "Use Strict"
    $(document).ready(function() {
        var $HelpPopup = $(".MsgPopup")
        var $HelpBtn = $(".HelpBtn")
        var $HelpPopupMain = $(".MsgPopup.Main")
        $HelpPopupMain.delay(5000).animate({
            opacity: 1,
            bottom: "50",
        }, 500, function() {});

        $("#CloseHelpPopup").click(function() {
            $HelpPopup.animate({
                opacity: 0,
                bottom: "0",
            }, 500, function() {
                $HelpPopup.css({
                    display: "none",
                });
                $HelpBtn.css({ display: "block" })
                $HelpBtn.animate({
                    opacity: 1,
                    bottom: "0",
                }, 500, function() {})
            });
        });
        $HelpBtn.click(function() {
            $HelpBtn.animate({
                opacity: 0,
                bottom: "-50",
            }, 500, function() {
                $HelpBtn.css({
                    display: "none",
                })
                $HelpPopup.css({
                    bottom: "0",
                    display: "block",
                })
                $HelpPopup.animate({
                    opacity: 1,
                    bottom: "50",
                }, 500, function() {});
            })
        });

        var $pause = 4000;
        var $Slider = $(".Slider");
        var $Length = $Slider.find('img');
        var i = 1;
        setInterval(function() {
            $Slider.animate({
                marginLeft: "-=100vw",
            }, 1000, function() {
                var length = $Slider.find('img').length
                i++
                if (i === length) {
                    i = 1;
                    $Slider.css({
                        marginLeft: "0px",
                    }, function() {});
                }
            });
        }, $pause);
        var $CommentSection = $(".CommentSectionMobile")
        var $Comments = $(".CommentSectionMobile .topComments")

        $(".Cbtn1").on("click", function() {
            Scroll("Cbtn", "1", 3, $CommentSection, $Comments, "0")
        });
        $(".Cbtn2").on("click", function() {
            Scroll("Cbtn", "2", 3, $CommentSection, $Comments, "-100vw")
        });
        $(".Cbtn3").on("click", function() {
            Scroll("Cbtn", "3", 3, $CommentSection, $Comments, "-200vw")
        });



        var $topPicks = $(".topPicks")
        var $TPicks = $(".topPicks > .Picks")
        $(".Tbtn1").on("click", function() {
            Scroll("Tbtn", "1", 6, $topPicks, $TPicks, "0")
        });
        $(".Tbtn2").on("click", function() {
            Scroll("Tbtn", "2", 6, $topPicks, $TPicks, "-100vw")
        });
        $(".Tbtn3").on("click", function() {
            Scroll("Tbtn", "3", 6, $topPicks, $TPicks, "-200vw")
        });
        $(".Tbtn4").on("click", function() {
            Scroll("Tbtn", "4", 6, $topPicks, $TPicks, "-300vw")
        });
        $(".Tbtn5").on("click", function() {
            Scroll("Tbtn", "5", 6, $topPicks, $TPicks, "-400vw")
        });
        $(".Tbtn6").on("click", function() {
            Scroll("Tbtn", "6", 6, $topPicks, $TPicks, "-500vw")
        });

        var $SpecialOffers = $(".SpecialOffers")
        var $SPicks = $(".SpecialOffers > .Picks")
        $(".Sbtn1").on("click", function() {
            Scroll("Sbtn", "1", 6, $SpecialOffers, $SPicks, "0")
        });
        $(".Sbtn2").on("click", function() {
            Scroll("Sbtn", "2", 6, $SpecialOffers, $SPicks, "-100vw")
        });
        $(".Sbtn3").on("click", function() {
            Scroll("Sbtn", "3", 6, $SpecialOffers, $SPicks, "-200vw")
        });
        $(".Sbtn4").on("click", function() {
            Scroll("Sbtn", "4", 6, $SpecialOffers, $SPicks, "-300vw")
        });
        $(".Sbtn5").on("click", function() {
            Scroll("Sbtn", "5", 6, $SpecialOffers, $SPicks, "-400vw")
        });
        $(".Sbtn6").on("click", function() {
            Scroll("Sbtn", "6", 6, $SpecialOffers, $SPicks, "-500vw")
        });

        Scroll = function(btn, btnNum, NumInList, Section, Animate, Move) {
            var btnPressed = "." + btn + btnNum
            Animate.animate({
                marginLeft: Move,
            }, 400, function() {
                for (i = 1; i < NumInList + 1; i++)(
                    $(" ." + btn + i).removeClass("activebtn")
                )

                Section + $(btnPressed).addClass("activebtn")
            });
        }
        var $Allbtn = $(".DestNav #All");
        var $Summerbtn = $(".DestNav #Summer");
        var $Winterbtn = $(".DestNav #Winter");
        var $Citybtn = $(".DestNav #City");

        var $All = $(".allDests .item");
        var $Summer = $(".allDests .Summer");
        var $Winter = $(".allDests .Winter");
        var $City = $(".allDests .City");

        $($Allbtn).on("click", function() {
            $(this).addClass("active")
            $Summerbtn.removeClass("active")
            $Winterbtn.removeClass("active")
            $($All).css({
                display: "block"
            });
        });

        $($Summerbtn).on("click", function() {
            $(this).addClass("active")
            $Allbtn.removeClass("active")
            $Winterbtn.removeClass("active")
            $($Winter).css({
                display: "none"
            });
            $($City).css({
                display: "none"
            });
            $($Summer).css({
                display: "block"
            });
        });

        $($Winterbtn).on("click", function() {
            $(this).addClass("active")
            $Allbtn.removeClass("active")
            $Summerbtn.removeClass("active")
            $Citybtn.removeClass("active")
            $($Summer).css({
                display: "none"
            });
            $($City).css({
                display: "none"
            });
            $($Winter).css({
                display: "block"
            });
        });

        $($Citybtn).on("click", function() {
            $(this).addClass("active")
            $Allbtn.removeClass("active")
            $Summerbtn.removeClass("active")
            $Winterbtn.removeClass("active")
            $($Winter).css({
                display: "none"
            });
            $($Summer).css({
                display: "none"
            });
            $($City).css({
                display: "block"
            });
        });

        /* $($Citybtn).on("click", function() {
             $($Winter).animate({
                 opacity: 0,
                 left: "-50px",
             }, 300, function() {
                 $($Winter).css({
                     display: "none",
                 });
             });
         }); */
    });
});