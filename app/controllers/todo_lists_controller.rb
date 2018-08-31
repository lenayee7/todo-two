class TodoListsController < ApplicationController

	def index
		@todo_lists = TodoList.all
	end

	def show
		@todo_list = TodoList.find(params[:id])
		@todo_list_items = @todo_list.todo_list_items.all
	end

	def new
		@todo_list = TodoList.new
	end

	def edit
		@todo_list = TodoList.find(params[:id])
		render 'edit'
	end

	def create
		todo_list_data = params[:todo_list]
		title = todo_list_data[:title]
		description = todo_list_data[:description]
		@todo_list = TodoList.create({title: title, description: description})
		@todo_list_items = @todo_list.todo_list_items.all
		render 'show'
	end

	def update
		@todo_list = TodoList.find(params[:id])
		@todo_list.update(todo_list_params)

		redirect_to todo_list_path, notice: "OMG \"#{@todo_list.title}\" has been updated."
	end

	def destroy
		@todo_list = TodoList.find(params[:id])
		@todo_lists = TodoList.all
		@todo_list.destroy
		flash[:notice] = "DELETED TODO LIST"
		render 'index'
	end

private

	def todo_list_params
 		params.require(:todo_list).permit(:title, :description)
	end

end
