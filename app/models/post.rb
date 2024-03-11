class Post < ApplicationRecord
  belongs_to :user

  has_many :comments, dependent: :destroy
end

# Notes:
# -> in the model is where you do your database connection

# tut vid stopped @41:06
