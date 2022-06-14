Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do

    resources :games do
      resources :characters
    end

    get '/characters', to: 'characters#all_characters'
    get '/characters/:id', to: 'characters#find_character'
  end
end

