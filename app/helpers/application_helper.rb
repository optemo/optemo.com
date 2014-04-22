module ApplicationHelper
  def active_check(category)
    #Check if we're on a category page to make the dropdown menu active
    if category == "products" && %w[search faceted recommendations mrc].include?(params[:action]) ||
    category == "technology" && %w[adaptation api].include?(params[:action]) ||
    category == "support" && "support" == params[:action] ||
    category == "company" && %w[about careers news].include?(params[:action])
      " active"
    else
      ""
    end
  end
end
