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
    var todoListId = $('#todo-list-id-hidden-field').val();
    var url = 'http://localhost:3000/todo_lists/' + todoListId + '/todo_list_items.json';
    event.preventDefault();
    event.stopPropagation();

    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function(responseData) {
        alert('You did it');
        // Inject HTML into our page
        // Find the element we're adding things into
        var items = $('#todo-list-items');
        // generate html
        var html = "<div class='col s12 m6'><div class='card'><div class='card-content'>\
                      <div>Name: NAME</div>\
                      <div>Description: DESCRIPTION</div>\
                      <div>Priority: PRIORITY</div>\
                      <div>Completed: COMPLETED</div>\
                      <div class='card-action'>\
                        <a rel='nofollow' data-method='delete' href='TDI_URL'>Delete</a>\
                        <a href='TDI_EDIT_URL'>Edit</a>\
                      </div>\
                    </div></div></div>";

        var tdiUrl = '/todo_lists/' + responseData.todo_list_id + '/todo_list_items/' + responseData.id;
        var tdiEditUrl = '/todo_lists/' + responseData.todo_list_id + '/todo_list_items/' + responseData.id + '/edit';

        html = html.replace('NAME', responseData.name);
        html = html.replace('DESCRIPTION', responseData.description);
        html = html.replace('PRIORITY', responseData.priority);
        html = html.replace('COMPLETED', responseData.completed);
        html = html.replace('TDI_URL', tdiUrl);
        html = html.replace('TDI_EDIT_URL', tdiEditUrl);

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
