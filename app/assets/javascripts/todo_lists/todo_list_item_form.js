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
    debugger
    var todoListId = $('#todo-list-id-hidden-field').val();
    var url = 'http://localhost:3000/todo_lists/' + todoListId + '/todo_list_items.json';
    event.preventDefault();
    event.stopPropagation();

    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function(data) {
        alert('You did it');
        debugger
        // Inject HTML into our page
        // Find the element we're adding things into
        var items = $('#todo-list-items');
        // generate html
        var html = "<div class='col s12 m6'><div class='card'><div class='card-content'>\
                      <div>Name: NAME</div>\
                      <div>Description: DESCRIPTION</div>\
                      <div>Priority: PRIORITY</div>\
                      <div>Incomplete</div>\
                      <div class='card-action'>TODO: insert links here</div>\
                    </div></div></div>"
        // Replace placeholders with actual DATA https://www.w3schools.com/jsref/jsref_replace.asp
        // inject: https://api.jquery.com/append/
        items.append(html);
        // Clear the Form
        $("#todo-list-item-name").val('')
        $("#todo-list-item-description").val('')
        $("#todo-list-item-priority").val('')
      },
      error: function(jqXHR,textStatus,errorThrown) {
        alert('ERROR didnt save item');
      }
    });
  });
});
