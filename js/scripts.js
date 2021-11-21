$(document).ready(function () {
    $("#pic1").click(function () {
        $("#pic1").hide();
        $(".design").show();
    });
    $(".design").click(function () {
        $(".design").hide();
        $("#pic1").show();
    });

});

$(document).ready(function () {
    $("#pic2").click(function () {
        $("#pic2").hide();
        $(".development").show();
    });
    $(".development").click(function () {
        $(".development").hide();
        $("#pic2").show();
    });

});

$(document).ready(function () {
    $("#pic3").click(function () {
        $("#pic3").hide();
        $(".product").show();
    });
    $(".product").click(function () {
        $(".product").hide();
        $("#pic3").show();
    });

});

$(document).ready(function () {
    $("#jim1").mouseover(function () {
        $("#jim2").show();
    })
        .mouseout(function () {
            $("#jim2").hide();
        });

    $("#yellow1").mouseover(function () {
        $("#yellow2").show();
    })
        .mouseout(function () {
            $("#yellow2").hide()
        });

    $("#mighty1").mouseover(function () {
        $("#mighty2").show();
    })
        .mouseout(function () {
            $("#mighty2").hide()
        });

    $("#dark1").mouseover(function () {
        $("#dark2").show();
    })
        .mouseout(function () {
            $("#dark2").hide();
        })

    $("#have1").mouseover(function () {
        $("#have2").show();
    })
        .mouseout(function () {
            $("#have2").hide();
        })

    $("#selector1").mouseover(function () {
        $("#selector2").show();
    })
        .mouseout(function () {
            $("#selector2").hide();
        })

    $("#burned1").mouseover(function () {
        $("#burned2").show();
    })
        .mouseout(function () {
            $("#burned2").hide();
        })

    $("#giraffe1").mouseover(function () {
        $("#giraffe2").show();
    })
        .mouseout(function () {
            $("#giraffe2").hide();
        })
});


$("button").click(function () {
    var name = document.getElementById("name1").value;
    var email = document.getElementById("name2").value;
    var message = document.getElementById("name3").value;
    if (name === "") {
        alert("Please Insert your name")
    } else
        if (email === "") {
            alert("Enter your Email")
        } else
            if (message === "") {
                alert("Please insert your message!")
            } else {
                alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
            }
});
