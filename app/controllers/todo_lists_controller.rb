class TodoListsController < ApplicationController

	def index
		@todo_lists = TodoList.all
	end

	def show
		@todo_list = TodoList.find(params[:id])
	end

	def new
		@todo_list = TodoList.new
	end

	def create
		todo_list_data = params[:todo_list]
		title = todo_list_data[:title]
		description = todo_list_data[:description]
		@todo_list = TodoList.create(title: title, description: description)

		render 'show'
	end

end
