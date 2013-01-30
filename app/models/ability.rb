class Ability < ActiveRecord::Base
  attr_accessible :ability_type, :name, :description, :body, :column, :order
end
