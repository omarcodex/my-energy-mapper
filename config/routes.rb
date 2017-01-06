Rails.application.routes.draw do

  get 'graph/index'
  root 'graph#index'
  # get 'graph/data', :defaults => { :format => 'json' } # Must do this!
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
