class CatNamesController < ApplicationController
  before_action :authenticate_user!, except: [ :index ]
  def index
      @cat_names = CatName.all()
      render json: @cat_names
  end

  def create
      cat_name = current_user.cat_names.create(
        name: params[:name]
      )
      render json: { cat_name: cat_name }
  end

end
