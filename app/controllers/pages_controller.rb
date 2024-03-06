class PagesController < ApplicationController
  def home
  end

  def about
  end
end


# Notes:
# cmd syntax -> rails g controller controller_name action1 actionN

# action 
# -> refer to the methods defined within a controller
# -> handle incoming requests from the client (usually a web browser) and produce an appropriate response
# -> when a user navigates to a specific URL in Rails app, the routing system directs that request to a particular controller action based on the URL and HTTP method (GET, POST, etc.)
# -> the controller action then performs any necessary processing, such as:
  # querying the database
  # rendering a view template or
  # redirecting to another page