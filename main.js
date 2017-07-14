/**
 * Created by Luka on 13. 07. 2017.
 */

$(document).ready(function() {

    $("#search").click(function () {

        var searchInput = $("#search-input").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchInput+"&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                // console.log(data[1][0]);
                // console.log(data[2][0]);
                // console.log(data[3][0]);
                $("#output").html("");
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").append("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }

            },
            error: function(errorMessage) {
                alert("Error");
            }

        });

    });

});
