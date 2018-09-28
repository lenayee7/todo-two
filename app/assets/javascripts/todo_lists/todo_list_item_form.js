$(document).ready(function() {

  $('#todo-list-item-form').on('submit', function(event) {

    var data = {
      todo_list_item: {
        name: $("#todo-list-item-name").val(),
        description: $("#todo-list-item-description").val(),
        priority: $("#todo-list-item-priority").val(),
        completed: false
      }
    };

    event.preventDefault();
    event.stopPropagation();

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/todo_lists/8/todo_list_items.json',
      data: data,
      success: function(data) {
        alert('You did it');
        location.reload();
      },
      error: function(jqXHR,textStatus,errorThrown) {
        alert('ERROR didnt save item');
      }
    });
  });
});
