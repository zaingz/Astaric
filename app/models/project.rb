class Project < ActiveRecord::Base
  mount_uploader :image, ImageUploader

  validates :tittle, :presence => {:message => ' cannot be black'}

end
