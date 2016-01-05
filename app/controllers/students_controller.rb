class StudentsController < ApplicationController
	def index
		respond_with Student.all
	end

	def create
		respond_with Student.create(student_params)
	end

	def show
		respond_with Student.find(params[:id])
	end

	def destroy
		respond_with Student.delete(params[:id])
	end

	private
	def student_params
		params.require(:student).permit(:name, :phone, :address)
	end
end
