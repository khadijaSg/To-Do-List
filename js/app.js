
$(function(){
    $('#add').on('click', function() {

        let val = $('#inpt').val();
        $('#ol1').prepend('<li class="list-group-item">'+val+'<span id="rem" class="remove-button"><i class="fas fa-trash-alt"></i></span></li>')


        $('#rem').on('click', function(){
            $(this).parent().remove();
        })

    });
})