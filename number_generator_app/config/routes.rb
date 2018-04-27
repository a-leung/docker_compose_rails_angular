Rails.application.routes.draw do
  get '/number', to: 'number_generator#number'  
end
