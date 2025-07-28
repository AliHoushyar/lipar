function animatePointProgress() {
    const percentElement = $(".PPTPercent span:last-child"); // e.g. 70
    const targetPercent = parseInt(percentElement.text());
    const progressBar = $(".PPTMainBar");

    let count = 0;
    const duration = 800; // total animation duration (ms)
    const interval = 20;
    const step = targetPercent / (duration / interval);

    const counter = setInterval(() => {
        count += step;
        if (count >= targetPercent) {
            count = targetPercent;
            clearInterval(counter);
        }
        percentElement.text(Math.floor(count));
        progressBar.css("width", count + "%");
    }, interval);
}

$(document).ready(function() {
    $('#LoginBtnMain').click(function(){
        $('.loginForm').css('bottom','0px');
        $('.loginTexts').css('opacity','0');
        $('.loginLogo').css('top','100px');
    })

    $('#LoginBtnMainSec').click(function(){
        $('.forgetPassForm').css('bottom','0px');
        $('.loginTexts').css('opacity','0');
        $('.loginLogo').css('top','100px');
    })

    $(document).on("click", "#WalletBtn , #WalletBtn2 , #SiPrfBtn2", function () {
        $(".mainBigContainer").css('opacity', '0');
        $(".BMenuBtn , .sideBarSingleBtn").removeClass("active");
        $("#WalletBtn , #WalletBtn2").addClass("active");
        history.pushState(null, '', "wallet.html");
        setTimeout(function () {
            $(".mainBigContainer").load("wallet.html .walletContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                    setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
    
                $("#WalletBtn , #WalletBtn2").addClass("active");
                $(".TMLoc").html("کیف پول")
            });
        }, 150);
    });
    
    $(document).on("click", "#HomeBtn , #HomeBtn2", function () {
        $(".mainBigContainer").css('opacity', '0');
        $(".BMenuBtn , .sideBarSingleBtn").removeClass("active");
        $("#HomeBtn , #HomeBtn2").addClass("active");
        history.pushState(null, '', "home.html");
        setTimeout(function () {
            $(".mainBigContainer").load("home.html .homeContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $("#HomeBtn , #HomeBtn2").addClass("active");
                $(".TMLoc").html("خانه")
            });
        }, 150);
    });

    $(document).on("click", "#ProfBtn , #ProfBtn2", function () {
        $(".mainBigContainer").css('opacity', '0');
        $(".BMenuBtn , .sideBarSingleBtn").removeClass("active");
        $("#ProfBtn , #ProfBtn2").addClass("active");
        history.pushState(null, '', "profile.html");
        setTimeout(function () {
            $(".mainBigContainer").load("profile.html .profContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $("#ProfBtn , #ProfBtn2").addClass("active");
                $(".TMLoc").html("پروفایل")
            });
        }, 150);
    });

    $(document).on("click", "#SettBtn , #SettBtn2", function () {
        $(".mainBigContainer").css('opacity', '0');
        $(".BMenuBtn , .sideBarSingleBtn").removeClass("active");
        $("#SettBtn , #SettBtn2").addClass("active");
        history.pushState(null, '', "setting.html");
        setTimeout(function () {
            $(".mainBigContainer").load("setting.html .settingContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $("#SettBtn , #SettBtn2").addClass("active");
                $(".TMLoc").html("تنظیمات")
            });
        }, 150);
    });

    $(document).on("click", "#PointBtn , #PointBtn2", function () {
        $(".mainBigContainer").css('opacity', '0');
        $(".BMenuBtn , .sideBarSingleBtn").removeClass("active");
        $("#PointBtn , #PointBtn2").addClass("active");
        history.pushState(null, '', "points.html");
        setTimeout(function () {
            $(".mainBigContainer").load("points.html .pointContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
            
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
            
                    // Animate count and progress bar
                    animatePointProgress();
            
                    // Set page title
                    $("#PointBtn , #PointBtn2").addClass("active");
                    $(".TMLoc").html("امتیاز ها");
                }, 20);
            });
        }, 150);
    });

    $(document).on("click", "#gardBTN", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "bankStatement.html");
        setTimeout(function () {
            $(".mainBigContainer").load("bankStatement.html .walletContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("گردش حساب")
            });
        }, 150);
    });

    $(document).on("click", "#takeReport", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "chapGozaresh.html");
        setTimeout(function () {
            $(".mainBigContainer").load("chapGozaresh.html .chapGozerContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("چاپ گزارش")
            });
        }, 150);
    });

    $(document).on("click", "#SiPrfBtn4", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "invite.html");
        setTimeout(function () {
            $(".mainBigContainer").load("invite.html .invContaoner", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("دعوت از دوستان")
            });
        }, 150);
    });

    $(document).on("click", "#SiPrfBtn3", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "gifts.html");
        setTimeout(function () {
            $(".mainBigContainer").load("gifts.html .giftContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("هدایا")
            });
        }, 150);
    });

    $(document).on("click", "#SiSeBtn1", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "settingProfile.html");
        setTimeout(function () {
            $(".mainBigContainer").load("settingProfile.html .settingProfileCont", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("مدیریت پروفایل")
            });
        }, 150);
    });

    $(document).on("click", "#SiSeBtn2", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "changePass.html");
        setTimeout(function () {
            $(".mainBigContainer").load("changePass.html .settingContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("تغییر رمز عبور")
            });
        }, 150);
    });

    $(document).on("click", "#SiSeBtn3", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "mylocations.html");
        setTimeout(function () {
            $(".mainBigContainer").load("mylocations.html .settingContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("آدرس های من")
            });
        }, 150);
    });

    $(document).on("click", "#SiSeBtn4", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "myphones.html");
        setTimeout(function () {
            $(".mainBigContainer").load("myphones.html .settingContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("شماره تماس های من")
            });
        }, 150);
    });

    $(document).on("click", "#MtoPBTN", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "moneyToPoint.html");
        setTimeout(function () {
            $(".mainBigContainer").load("moneyToPoint.html .convertContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("تبدیل پول به امتیاز")
            });
        }, 150);
    });

    $(document).on("click", "#depoBTN", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "depositMain.html");
        setTimeout(function () {
            $(".mainBigContainer").load("depositMain.html .depositContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("واریز")
            });
        }, 150);
    });

    $(document).on("click", "#DeSbtnMain", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "depositL2.html");
        setTimeout(function () {
            $(".mainBigContainer").load("depositL2.html .depositContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("واریز")
            });
        }, 150);
    });

    $(document).on("click", "#withBtn", function () {
        $(".mainBigContainer").css('opacity', '0');
        history.pushState(null, '', "withdraw.html");
        setTimeout(function () {
            $(".mainBigContainer").load("withdraw.html .convertContainer", function () {
                $(".fadingRow").css({
                    opacity: 0,
                    marginTop: "20px",
                });
                $(".mainBigContainer").css("opacity", "1");
                setTimeout(function () {
                    $(".fadingRow").css({
                        opacity: 1,
                        marginTop: "0px",
                    });
                }, 20);
                $(".TMLoc").html("برداشت")
            });
        }, 150);
    });

    $('#loginMainForm').submit(function(e){
        e.preventDefault()
        window.location.href = "../home.html";
    })

    window.onpopstate = function () {
        const url = location.pathname;
        window.location.href = url;
    };
})