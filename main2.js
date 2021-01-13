$(document).ready(function () {
    function edit() {
        var txt1 = $(this).prev().prev();
        var int = $(this).prev();
        if (int.val() == "") {
            int.val(txt1.text());
        }
        else {
            txt1.text(int.val());
            int.val("");
        }
    };
  $(".at").click(function () {
        var txt = $("#inp1").val();
        var lst;
        if (txt != "") {
            var editBtn = $('<button type="button" class="bg">Edit</button>')
            var delBtn = $('<button type="button" class="del">Delete</button>')
            lst = $('<li class="list-group-item lis"><input class="form-check-input me-2 mt-2" type="checkbox" value="" aria-label=""><span>' + txt + '</span><input type="text"></li>');
            lst.append(editBtn, delBtn);
            $(".tl").append(lst);
            $(editBtn).on('click' , edit);
        }
        $("#inp1").val("");

        $(".me-2").click(function () {
            if ($(this).is(':checked')) {
                $(".ct").append($(this).parent());
            }
            else {
                $(".tl").append($(this).parent());
            }
        });
        $(".del").click(function () {
            $(this).parent().remove();
        });
    });
});


