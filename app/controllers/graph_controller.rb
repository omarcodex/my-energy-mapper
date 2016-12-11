class GraphController < ApplicationController
  def index  # Gives us the template that will hold the graph.
  end

 # Gives us json data we can use to build the graph. Note that we have to go into the routes controller and tell it to not use the defaults as erb.
  def data
    respond_to do |format|
      format.json {
        render :json => [1,2,3,4,5]
      }
    end
  end
end
