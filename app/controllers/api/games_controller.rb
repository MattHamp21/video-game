class Api::GamesController < ApplicationController
before_action :set_game, only: [:show, :update, :destroy]

def index
  render json: Game.all
end

def show
  render json: @game
end

def create
  @game = Game.create(game_params)

  if(@game.save)
    render json: @game
  else
    render json: @game.error.full_message, status: 422
  end
end

def update
  if (@game.update(game_params))
    render json: @game
  else
    render json: @game.error.full_message, status: 422
  end
end

def destroy
  render json: @game.destroy
end

  private 

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:name, :year)
  end
end
