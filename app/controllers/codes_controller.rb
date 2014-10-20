class CodesController < ApplicationController
  def index
    @codes = Code.all
  end

  def show
  end

  def new
    @code = Code.new
  end

  def create
    @code = Code.new(code_params)
    if @code.save
      redirect_to codes_path
    else
      render code_new_path
    end

  end

  def update
  end

  def edit
  end

  def destroy
  end

  private
  def code_params
    params.require(:code).permit(:barcode)
  end

end
