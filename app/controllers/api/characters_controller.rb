class Api::CharactersController < ApplicationController
  before_action :set_game, except: [:all_characters, :find_character]
  before_action :set_character, only: [:show, :update, :destroy]

  def all_characters
    render json: Character.all
  end

  def find_character
    render json: Character.find(params[:id])
  end

  def index
    render json: @game.characters
  end

  def show
    render json: @character
  end

  def create 
    @character = @game.characters.new(character_params)
    if(@character.save)
      render json: @character
    else
      render json: @character.error.full_message, status: 422
    end
  end

  def update
    if(@character.update(character_params))
      render json: @character
    else
      render json: @character.error.full_message, status: 422
    end
  end

  def destroy
    render json: @character.destroy
  end
  
    private

    def set_game
      @game = Game.find(params[:game_id])
    end

    def set_character
      @character = @game.characters.find(params[:id])
    end

    def character_params
      params.require(:character).permit(:name, :age)
    end


end
