$(document).ready(function() {

  $('#new_todo_list_form').on('submit', function(event) {
    
    var title = $('#todo_list_title').val();
    var description = $('#todo_list_description').val();
    var titleInputError = $('#todo_list_title_errors');
    var descriptionInputError = $('#todo_list_description_errors');
    var has_errors = false

    titleInputError.hide();

    if (title.length < 1) {
      titleInputError.text('Title is Required');
      titleInputError.show();
      has_errors = true;
    }

    if (description.length < 1) {
      descriptionInputError.text('Description is Required')
      descriptionInputError.show();
      has_errors = true;
    }

    if (has_errors === true) {
      event.preventDefault();
      event.stopPropagation();
    }

  });

});
