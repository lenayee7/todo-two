$(document).ready(function() {

  $('#delete-todo-list').click(deleteHandler);

  function deleteHandler(event) {
    var response = confirm('Do you want to Delete this?');
    if (!response){
      event.preventDefault();
      event.stopPropagation();
    }
  };

});
