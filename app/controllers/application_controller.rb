class ApplicationController < ActionController::Base
  protect_from_forgery
  def url_options
    { format: 'html' }.merge(super)
  end
end
