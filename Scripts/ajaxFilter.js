
    $(document).ready(function () {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $(".mynewAdminBookList .card").filter(function () {
                $(this).toggle($('.card-title').text().toLowerCase().indexOf(value) > -1)
            });
        });

        $('#myInput').keyup(function () {
            $('.card').show();
            var filter = $(this).val(); // get the value of the input, which we filter on
            $('.mynewAdminBookList').find(".card-title:not(:contains(" + filter + "))").parent().parent().css('display', 'none');
        });
    });

