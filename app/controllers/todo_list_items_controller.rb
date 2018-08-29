class TodoListItemsController < ApplicationController

	def new
		@todo_list = TodoList.find(params[:todo_list_id])
		@todo_list_item = TodoListItem.new(todo_list_id: params[:todo_list_id])
	end

	def create
		todo_list_item_data = params[:todo_list_item]
		name = todo_list_item_data[:name]
		description = todo_list_item_data[:description]
		priority = todo_list_item_data[:priority]
		completed = todo_list_item_data[:completed]

		@todo_list_item = TodoListItem.create!(todo_list_id: params[:todo_list_id], name: name, description: description, priority: priority, completed: completed)

		flash[:notice] = "YaYYYY you created a List Item"
		redirect_to "/todo_lists/#{params[:todo_list_id]}"
	end

end